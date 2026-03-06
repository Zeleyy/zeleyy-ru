import { useState, type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "@/shared/api";

interface QueryProviderProps {
    children: ReactNode;
}

export const QueryProvider = (props: QueryProviderProps) => {
    const { children } = props;
    const [queryClient] = useState(() => createQueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};