'use client';

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';
import * as React from 'react';

export function ThemeProvider({ children, ...props }: React.PropsWithChildren<ThemeProviderProps>) {
  return (
    <NextThemesProvider attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
