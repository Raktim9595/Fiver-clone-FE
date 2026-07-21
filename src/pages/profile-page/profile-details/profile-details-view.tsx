import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    OutlinedInput,
    TextareaAutosize,
    Typography,
} from '@mui/material';
import { type ProfileDetailsViewProps } from './profile-detils.types';
import { FormInput } from '../../../components/form-input';
import { Email, LocalPhone, LocationOn, PersonAddAltOutlined } from '@mui/icons-material';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { CountriesSelect } from '../../../components/countries-select';
import { LanguageSelect } from '../../../components/language-select';
import { TimezoneSelect } from '../../../components/timezone-select';

export const ProfileDetailsView = ({
    control,
    errors,
    isSubmitting,
    onSubmit,
    isDirty,
    handleSubmit,
}: ProfileDetailsViewProps) => {
    return (
        <Box>
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h6">Personal Information</Typography>
                    <Grid
                        container
                        columnSpacing={2}
                        rowSpacing={3}
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            marginTop: '1rem',
                        }}
                    >
                        <Grid size={6}>
                            <FormInput
                                control={control}
                                name="username"
                                label="Username"
                                error={errors.username}
                                placeholder="Enter username"
                                icon={<PersonAddAltOutlined />}
                            />
                        </Grid>
                        <Grid size={6}>
                            <FormInput
                                control={control}
                                name="email"
                                label="Email Address"
                                error={errors.email}
                                icon={<Email />}
                                type="email"
                                placeholder="Enter email"
                            />
                        </Grid>
                        <Grid size={6}>
                            <FormInput
                                control={control}
                                name="phoneNumber"
                                label="Phone Number"
                                error={errors.phoneNumber}
                                placeholder="Enter phone number"
                                icon={<LocalPhone />}
                                type="number"
                            />
                        </Grid>
                        <Grid size={6}>
                            <FormInput
                                control={control}
                                name="address"
                                label="Address"
                                error={errors.address}
                                placeholder="Enter address"
                                icon={<LocationOn />}
                            />
                        </Grid>
                        <Grid size={6}>
                            <Controller
                                control={control}
                                name="dateOfBirth"
                                render={({ field }) => (
                                    <DatePicker
                                        {...field}
                                        value={dayjs(field.value)}
                                        label="Date of Birth"
                                        onChange={(date) => {
                                            field.onChange(date ? date.format('YYYY-MM-DD') : '');
                                        }}
                                        slotProps={{
                                            textField: {
                                                size: 'small',
                                                error: !!errors.dateOfBirth,
                                                helperText: errors.dateOfBirth?.message,
                                                fullWidth: true,
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={6}>
                            <Controller
                                control={control}
                                name="country"
                                render={({ field }) => (
                                    <CountriesSelect
                                        error={!!errors.country}
                                        helperText={errors.country?.message}
                                        onChange={(_, v) => field.onChange(v)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={6}>
                            <Controller
                                control={control}
                                name="language"
                                render={({ field }) => (
                                    <LanguageSelect
                                        error={!!errors.language}
                                        helperText={errors.language?.message}
                                        onChange={(_, v) => field.onChange(v)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={6}>
                            <Controller
                                control={control}
                                name="timeZone"
                                render={({ field }) => (
                                    <TimezoneSelect
                                        error={!!errors.timeZone}
                                        helperText={errors.timeZone?.message}
                                        onChange={(_, v) => field.onChange(v)}
                                        value={field.value}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={12}>
                            <Controller
                                control={control}
                                name="bio"
                                render={({ field }) => (
                                    <FormControl fullWidth>
                                        <InputLabel>Enter Bio</InputLabel>
                                        <OutlinedInput
                                            label="Enter Bio"
                                            multiline
                                            minRows={4}
                                            onChange={field.onChange}
                                            value={field.value}
                                        />
                                    </FormControl>
                                )}
                            />
                        </Grid>
                        <Box sx={{ marginLeft: 'auto' }}>
                            <Button
                                type="submit"
                                loading={isSubmitting}
                                color="success"
                                variant="contained"
                                disabled={!isDirty}
                            >
                                Save Changes
                            </Button>
                        </Box>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};
