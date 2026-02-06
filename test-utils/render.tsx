import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ModalContextProvider } from '../contexts/ModalContext';
import { ModalLanguageContextProvider } from '../contexts/LanguageContext';
import { ModalCustomizationContextProvider } from '../contexts/ModalCustomizationContext';

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return (
    <ModalContextProvider>
      <ModalLanguageContextProvider>
        <ModalCustomizationContextProvider>
          {children}
        </ModalCustomizationContextProvider>
      </ModalLanguageContextProvider>
    </ModalContextProvider>
  );
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
