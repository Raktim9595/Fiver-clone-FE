import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // ⏱️ How long data stays fresh
            staleTime: 1000 * 60 * 5, // 5 mins

            // 🧠 Cache duration (after unused)
            gcTime: 1000 * 60 * 30, // 30 mins (v5: gcTime replaces cacheTime)

            // 🔁 Retry failed requests
            retry: 1,

            // 🔄 Refetch behavior
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,

            // ❌ Prevent unnecessary refetch
            refetchOnMount: false,
        },

        mutations: {
            // 🔁 Retry mutations (usually better OFF for POST)
            retry: 0,
        },
    },
});
