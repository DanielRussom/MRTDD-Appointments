import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

export let container;
export let root;

export const initializeReactContainer = () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
};

export const render = (component) =>
    act(() => root.render(component));