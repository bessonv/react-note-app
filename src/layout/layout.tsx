import {ReactNode, FunctionComponent} from "react";
import { AppProvider } from '../context/app.context';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <header>
        <h2>To-Do List</h2>
      </header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppProvider>
    );
  }
}
