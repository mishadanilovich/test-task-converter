import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/containers';
import { GlobalStyles } from '@/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
