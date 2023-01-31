import { createRoot } from 'react-dom/client';

export let container;
export let root;

export const initializeReactContainer = () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
};