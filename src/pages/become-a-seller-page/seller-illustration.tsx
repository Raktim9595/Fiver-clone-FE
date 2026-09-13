import { Box } from '@mui/material';
import { SellerIllustrationProps } from './become-a-seller-page.types';

export const SellerIllustration = ({ src }: SellerIllustrationProps) => {
    return (
        <Box
            component="figure"
            sx={{
                m: 0,

                minWidth: 0,

                display: 'flex',

                alignItems: 'center',

                justifyContent: {
                    xs: 'center',
                    md: 'flex-end',
                },
            }}
        >
            {/*
             * The illustration does not provide information required to
             * understand or operate the page, so it is intentionally hidden
             * from assistive technology.
             *
             * Preserve the transparent canvas of the final exported artwork.
             * Tight-cropping the PNG/SVG will change its visual alignment even
             * if the CSS dimensions remain identical.
             */}
            <Box
                component="img"
                src={src}
                alt=""
                aria-hidden="true"
                sx={{
                    display: 'block',

                    width: {
                        xs: 'min(100%, 34rem)',
                        md: 'clamp(27rem, 42dvw, 40.5rem)',
                        xl: 'clamp(35rem, 36dvw, 41rem)',
                    },

                    maxWidth: '100%',

                    height: 'auto',

                    maxHeight: {
                        md: '48dvh',
                        lg: '50dvh',
                    },

                    objectFit: 'contain',
                }}
            />
        </Box>
    );
};
