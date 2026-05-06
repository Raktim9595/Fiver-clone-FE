import '@testing-library/jest-dom';
import { vi, beforeEach } from 'vitest';
import axios from 'axios';

export const mockNavigate = vi.fn();
export const mockShowNotification = vi.fn();

vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
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

vi.mock('axios', () => {
    const mockAxios = {
        get: vi.fn(),
        post: vi.fn(),
        put: vi.fn(),
        patch: vi.fn(),
        delete: vi.fn(),
        request: vi.fn(),
        create: vi.fn(),
    };

    mockAxios.create.mockReturnValue(mockAxios);

    return {
        default: mockAxios,
    };
});

beforeEach(() => {
    vi.clearAllMocks();
});
