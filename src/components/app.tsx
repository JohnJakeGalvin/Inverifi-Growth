import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
  createTheme,
} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider } from 'notistack';
import enGbLocale from 'dayjs/locale/en-gb';
import { Router } from './router';
import { AuthUserProvider } from './common/common';

import '@aws-amplify/ui-react/styles.css';

export const App = withAuthenticator(() => (
  <ThemeProvider theme={createTheme(window.invotraTheme)}>
    <CssBaseline />
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={enGbLocale}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
            <AuthUserProvider>
              <Router />
            </AuthUserProvider>
          </BrowserRouter>
        </SnackbarProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  </ThemeProvider>
), {
  signUpAttributes: [
    'email',
    'phone_number',
  ],
});
