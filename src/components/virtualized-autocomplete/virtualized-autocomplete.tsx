import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { List, type RowComponentProps, useListRef, type ListImperativeAPI } from 'react-window';
import Typography from '@mui/material/Typography';
import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
import {
    type ItemData,
    LISTBOX_PADDING,
    type VirtualizedAutoCompleteViewProps,
} from './virtualized-autocomplete.types';

const RowComponent = <T,>({
    index,
    itemData,
    style,
    getOptionLabel,
}: RowComponentProps & {
    itemData: ItemData<T>;
    getOptionLabel: (option: T) => string;
}) => {
    const dataSet = itemData[index];
    const inlineStyle = {
        ...style,
        top: ((style.top as number) ?? 0) + LISTBOX_PADDING,
    };

    if ('group' in dataSet) {
        return (
            <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
                {dataSet.group}
            </ListSubheader>
        );
    }

    const [optionProps, option, rowIndex] = dataSet;
    const { key, ...rest } = optionProps;

    return (
        <Typography key={key} component="li" {...rest} noWrap style={inlineStyle}>
            {`#${rowIndex + 1} - ${getOptionLabel(option)}`}
        </Typography>
    );
};

// Adapter for react-window v2
const ListboxComponent = forwardRef(function ListboxComponent<T>(
    props: React.HTMLAttributes<HTMLElement> & {
        internalListRef: React.Ref<ListImperativeAPI>;
        onItemsBuilt: (optionIndexMap: Map<string, number>) => void;
        getOptionLabel: (option: T) => string;
    },
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    const { children, internalListRef, onItemsBuilt, getOptionLabel, ...other } = props;
    const itemData: ItemData<T> = [];
    const optionIndexMap = useMemo(() => new Map<string, number>(), []);

    (children as ItemData<T>).forEach((item) => {
        itemData.push(item);
        if ('children' in item && Array.isArray(item.children)) {
            itemData.push(...item.children);
        }
    });

    // Map option values to their indices in the flattened array
    itemData.forEach((item, index) => {
        if (Array.isArray(item) && item[1]) {
            optionIndexMap.set(props.getOptionLabel(item[1]), index);
        }
    });

    useEffect(() => {
        if (onItemsBuilt) {
            onItemsBuilt(optionIndexMap);
        }
    }, [onItemsBuilt, optionIndexMap]);

    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
        noSsr: true,
    });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: ItemData<T>[number]) => {
        if (child.hasOwnProperty('group')) {
            return 48;
        }
        return itemSize;
    };

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    // Separate className for List, other props for wrapper div (ARIA, handlers)
    const { className, style, ...otherProps } = other;

    return (
        <div ref={ref} {...otherProps}>
            <List
                className={className}
                listRef={internalListRef}
                key={itemCount}
                rowCount={itemCount}
                rowHeight={(index) => getChildSize(itemData[index])}
                rowComponent={RowComponent}
                rowProps={{ itemData, getOptionLabel }}
                style={{
                    height: getHeight() + 2 * LISTBOX_PADDING,
                    width: '100%',
                }}
                overscanCount={5}
                tagName="ul"
            />
        </div>
    );
});

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0,
        },
    },
});

const VirtualizedAutoComplete = <T,>({
    onChange,
    value = null,
    label,
    options,
    getOptionLabel,
    error = false,
    helperText,
}: VirtualizedAutoCompleteViewProps<T>) => {
    // Use react-window v2's useListRef hook for imperative API access
    const internalListRef = useListRef(null);
    const optionIndexMapRef = useRef<Map<string, number>>(new Map());

    const handleItemsBuilt = useCallback((optionIndexMap: Map<string, number>) => {
        optionIndexMapRef.current = optionIndexMap;
    }, []);

    // Handle keyboard navigation by scrolling to highlighted option
    const handleHighlightChange = (_event: React.SyntheticEvent, option: T | null) => {
        if (option && internalListRef.current) {
            const index = optionIndexMapRef.current.get(getOptionLabel(option));
            if (index !== undefined) {
                internalListRef.current.scrollToRow({ index, align: 'auto' });
            }
        }
    };

    return (
        <Autocomplete<T>
            sx={{ width: 300 }}
            disableListWrap
            options={options}
            groupBy={(option) => getOptionLabel(option)[0].toUpperCase()}
            renderInput={(params) => (
                <TextField {...params} label={label} error={error} helperText={helperText} />
            )}
            renderOption={(props, option, state) => [props, option, state.index] as React.ReactNode}
            renderGroup={(params) => params as any}
            onHighlightChange={handleHighlightChange}
            getOptionLabel={getOptionLabel}
            slots={{
                popper: StyledPopper,
            }}
            value={value}
            onChange={onChange}
            slotProps={{
                listbox: {
                    component: ListboxComponent,
                    internalListRef,
                    onItemsBuilt: handleItemsBuilt,
                    getOptionLabel,
                } as any,
            }}
        />
    );
};

export default VirtualizedAutoComplete;
