import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { type ProfileDetailsViewProps } from './profile-detils.types';
import { FormInput } from '../../../components/form-input';
import { Email, LocalPhone, LocationOn, Person2, PersonAddAltOutlined } from '@mui/icons-material';
import { Controller } from 'react-hook-form';
import { ClockIcon, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export const ProfileDetailsView = ({
    control,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
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
                            <FormInput
                                control={control}
                                name="country"
                                label="Country"
                                error={errors.country}
                                placeholder="Enter country"
                                icon={<LocationOn />}
                            />
                        </Grid>
                        <Grid size={6}>
                            <FormInput
                                control={control}
                                name="language"
                                label="Language"
                                error={errors.language}
                                placeholder="Enter language"
                                icon={<Person2 />}
                            />
                        </Grid>
                        <Grid size={6}>
                            <FormInput
                                control={control}
                                name="timeZone"
                                label="Time Zone"
                                error={errors.timeZone}
                                placeholder="Enter time zone"
                                icon={<ClockIcon />}
                            />
                        </Grid>
                        <Box sx={{ marginLeft: 'auto' }}>
                            <Button
                                type="submit"
                                loading={isSubmitting}
                                color="success"
                                variant="contained"
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
