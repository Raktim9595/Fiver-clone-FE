import { renderHookWithWrapper } from '../../utils/test-wrapper';
import { mockedAxios } from '../../utils/test-setups';
import { mockRoleList } from '../../__mocks__/data/info-mock.data';
import { waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { useRolesSelect } from './use-roles-select';

beforeEach(() => {
    vi.clearAllMocks();
});

describe('Given useRolesSelect Hook, Unit Test', () => {
    describe('When rendered', () => {
        test('Then it should return proper values', () => {
            const { result } = renderHookWithWrapper(() => useRolesSelect());

            expect(result.current).toStrictEqual({
                roles: [],
                isLoading: true,
            });
        });

        test('Then it should fetch the roles data', async () => {
            const mockData = mockRoleList();
            mockedAxios.get.mockResolvedValue({
                data: {
                    data: mockData,
                },
            });
            const { result } = renderHookWithWrapper(() => useRolesSelect());

            await waitFor(() => {
                expect(result.current).toStrictEqual({
                    roles: mockData,
                    isLoading: false,
                });
            });

            expect(mockedAxios.get).toHaveBeenCalledWith('http://raktim-backend:8080/api/roles');

            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        });
    });
});
