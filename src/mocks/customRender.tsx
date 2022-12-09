import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { AppProvider } from '../context/app.context';
import { ProviderProps } from '../context/context.types';

export const customRender = (ui: ReactNode, providerProps: ProviderProps) => {
  return render(
    <AppProvider {...providerProps}>{ui}</AppProvider>
  )
}
