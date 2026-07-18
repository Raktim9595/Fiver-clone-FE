import { type Meta, type StoryObj } from '@storybook/react-vite';
import VirtualizedAutoComplete from './virtualized-autocomplete';
import { mockCountriesList } from '../../__mocks__/data/info-mock.data';
import { Controller, useForm } from 'react-hook-form';
import { type Country } from '../../types/info.types';
import type SignUpFormView from '../../pages/signup-page/sign-up-form/sign-up-form-view';

const meta: Meta<typeof VirtualizedAutoComplete> = {
    title: 'Components/VirtualizedAutoComplete',
    component: VirtualizedAutoComplete,
    parameters: {
        layout: 'centered',
    },
};

const options = mockCountriesList();

export default meta;
type Story = StoryObj<typeof SignUpFormView>;

const StoryWrapper = ({
    error,
    helperText,
    value = null,
    isLoading = false,
}: {
    error?: boolean;
    helperText?: string;
    value?: Country | null;
    isLoading?: boolean;
}) => {
    const { control } = useForm<{
        country: Country | null;
    }>({
        defaultValues: {
            country: value,
        },
    });

    return (
        <Controller
            control={control}
            name="country"
            render={({ field }) => (
                <VirtualizedAutoComplete<Country>
                    options={options}
                    getOptionLabel={(option) => option.name}
                    label="Select countries"
                    value={value}
                    onChange={field.onChange}
                    error={error}
                    helperText={helperText}
                    isLoading={isLoading}
                />
            )}
        />
    );
};

export const VirtualizedAutocompleteDefault: Story = {
    render: () => <StoryWrapper />,
};

export const VirtualizedAutoCompleteWithDefaultValue: Story = {
    render: () => <StoryWrapper value={options[3]} />,
};

export const VirtualizedAutoCompleteWithErros: Story = {
    render: () => <StoryWrapper error helperText="Country is required" />,
};

export const VirtualizedAutoCompleteLoading: Story = {
    render: () => <StoryWrapper isLoading />,
};
