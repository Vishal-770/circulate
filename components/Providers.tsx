"use client";
import React, { useState } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config, appId, clientId } from "@/lib/privy_config";
import { ThemeProvider } from "./ThemeProvider";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
            retryDelay: (attemptIndex) =>
              Math.min(1000 * 2 ** attemptIndex, 10000),
            staleTime: 60_000,
          },
        },
      }),
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <PrivyProvider appId={appId} clientId={clientId} config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PrivyProvider>
    </ThemeProvider>
  );
};

export default Providers;
