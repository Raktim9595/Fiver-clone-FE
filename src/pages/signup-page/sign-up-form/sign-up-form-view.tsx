import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
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
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={firstname}
                        placeholder="First Name"
                        onChange={() => {}}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        placeholder="Last Name"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={lastname}
                        onChange={() => {}}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Stack>
                <TextField
                    id="outlined-basic"
                    label="User Name"
                    placeholder="Enter username"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={username}
                    onChange={() => {}}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonAddAltOutlined />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                    value={email}
                    onChange={() => {}}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    size="small"
                    value={password}
                    onChange={() => {}}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <Stack direction="row" spacing={2}>
                    <TextField
                        id="outlined-basic"
                        label="Age"
                        placeholder="Age"
                        variant="outlined"
                        fullWidth
                        size="small"
                        type="number"
                        value={age}
                        onChange={() => {}}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarMonth />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        placeholder="Phone Number"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={phoneNumber}
                        onChange={() => {}}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalPhone />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </Stack>
                <TextField
                    id="outlined-basic"
                    label="Address"
                    placeholder="Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={address}
                    onChange={() => {}}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOn />
                                </InputAdornment>
                            ),
                        },
                    }}
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
