'use client';
import { Sun, Moon } from 'lucide-react';
import { useTheme as useNextTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { Button } from 'ui-components';

const ThemeSwitch = () => {
  const { theme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="fixed top-4 right-4 z-50 flex items-center justify-center p-2 rounded-full transition-all"
        aria-label="Toggle theme"
      >
        <Sun
          className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
            isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
            isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
          }`}
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ThemeSwitch;
