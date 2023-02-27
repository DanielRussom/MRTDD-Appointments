import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

export let container;
export let root;

export const initializeReactContainer = () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
};

export const render = (component) =>
    act(() => root.render(component));

export const click = (element) =>
    fireEvent.click(element);

export const element = (selector) => 
    container.querySelector(selector);
    
export const elements = (selector) => 
    Array.from(container.querySelectorAll(selector));

export const typesOf = (elements) =>
    elements.map((element) => element.type);

export const textOf = (elements) =>
    elements.map((element) => element.textContent);
