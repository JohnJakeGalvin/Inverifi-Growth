import { Theme } from '@mui/material';

declare global {
  const invotraTheme: Partial<Theme>;
  interface Window {
    invotraTheme: Partial<Theme>;
  }
}

export {};
