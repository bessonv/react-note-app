import {ReactNode, FunctionComponent} from "react";
import { AppProvider } from '../context/app.context';
import { ReactComponent as NoteIcon } from '../assets/note.svg';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <header>
        <NoteIcon className="note-icon"/>
        <h2>Notes App</h2>
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
