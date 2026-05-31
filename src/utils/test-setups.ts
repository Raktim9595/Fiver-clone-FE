import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';
import axios from 'axios';

export const mockNavigate = vi.fn();
export const mockShowNotification = vi.fn();
export const mockedAxios = vi.mocked(axios);
export const mockGetAuthToken = vi.fn();
export const mockSetAuthToken = vi.fn();
export const mockRemoveAuthToken = vi.fn();
export const mockUseLocation = vi.fn();
export const mockUseOutletContext = vi.fn();

vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useLocation: () => mockUseLocation(),
        useOutletContext: () => mockUseOutletContext(),
    };
});

vi.mock('../providers/notification-provider', async () => {
    const actual = await vi.importActual('../providers/notification-provider');
    return {
        ...actual,
        useNotification: () => ({
            showNotification: mockShowNotification,
        }),
    };
});

vi.mock('./auth-storage', async () => {
    const actual = await vi.importActual('./auth-storage');
    return {
        ...actual,
        getAuthToken: mockGetAuthToken,
        setAuthToken: mockSetAuthToken,
        removeAuthToken: mockRemoveAuthToken,
    };
});

vi.mock('axios', () => {
    const mockAxios = {
        get: vi.fn(),
        post: vi.fn(),
        put: vi.fn(),
        patch: vi.fn(),
        delete: vi.fn(),
        request: vi.fn(),
        create: vi.fn(),
        interceptors: {
            request: {
                use: vi.fn((onFulfilled) => onFulfilled),
                eject: vi.fn(),
            },
            response: {
                use: vi.fn((onFulfilled) => onFulfilled),
                eject: vi.fn(),
            },
        },
    };

    mockAxios.create.mockReturnValue(mockAxios);

    return {
        default: mockAxios,
    };
});

beforeEach(() => {
    vi.clearAllMocks();
});
