import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/containers';
import { ThemeProvider } from '@/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
