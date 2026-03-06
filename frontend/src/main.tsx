import './app/styles/index.scss';
import { createRoot } from 'react-dom/client';
import { QueryProvider, ThemeProvider } from './app/providers';
import App from './app/App.tsx';

createRoot(document.getElementById('root')!).render(
    <QueryProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </QueryProvider>
);
