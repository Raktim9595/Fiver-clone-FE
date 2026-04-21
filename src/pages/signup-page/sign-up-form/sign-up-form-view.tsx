import { Box, Button, Stack } from '@mui/material';
import { UserRole, type SignUpFormViewProps } from './sign-up-form.types';
import { capitalize, upperCase } from 'lodash';
import {
    AccountCircle,
    PersonAddAltOutlined,
    Email,
    LockOutlined,
    CalendarMonth,
    LocalPhone,
    LocationOn,
} from '@mui/icons-material';
import { CustomSelect } from '../../../components/select';
import { CustomInput } from '../../../components/input';

export const SignUpFormView = (props: SignUpFormViewProps) => {
    const { address, age, email, firstname, lastname, password, phoneNumber, username, role } =
        props;

    const options = Object.values(UserRole).map((role) => ({
        label: capitalize(role),
        value: upperCase(role),
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vwx',
            }}
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted');
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    width: '40rem',
                }}
            >
                <Stack direction="row" spacing={2}>
                    <CustomInput
                        label="First Name"
                        value={firstname}
                        placeholder="First Name"
                        onChange={() => {}}
                        icon={<AccountCircle />}
                    />
                    <CustomInput
                        label="Last Name"
                        value={lastname}
                        placeholder="Last Name"
                        onChange={() => {}}
                        icon={<AccountCircle />}
                    />
                </Stack>
                <CustomInput
                    label="User Name"
                    value={username}
                    placeholder="Enter Username"
                    onChange={() => {}}
                    icon={<PersonAddAltOutlined />}
                />
                <CustomInput
                    label="Email"
                    value={email}
                    placeholder="Email"
                    onChange={() => {}}
                    type="email"
                    icon={<Email />}
                />
                <CustomInput
                    label="Password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={() => {}}
                    icon={<LockOutlined />}
                    type="password"
                />
                <Stack direction="row" spacing={2}>
                    <CustomInput
                        label="Age"
                        value={age}
                        placeholder="Enter Age"
                        onChange={() => {}}
                        icon={<CalendarMonth />}
                        type="number"
                    />
                    <CustomInput
                        label="Phone Number"
                        value={phoneNumber}
                        placeholder="Enter Phonenumber"
                        onChange={() => {}}
                        icon={<LocalPhone />}
                    />
                </Stack>
                <CustomInput
                    label="Address"
                    value={address}
                    placeholder="Enter Address"
                    onChange={() => {}}
                    icon={<LocationOn />}
                />

                <CustomSelect
                    label="Role"
                    onChange={() => {}}
                    options={options}
                    value={role}
                    icon={<PersonAddAltOutlined />}
                />

                {/* Sign up button  */}
                <Button variant="contained" color="success" type="submit">
                    Create Account
                </Button>
            </Stack>
        </Box>
    );
};
