import { HeadphonesPage } from "./components/headphones-page/headphones-page";
import { Layout } from "./components/layout/layout";

import "./app.css";
import { ThemeContextProvider } from "./components/theme-context/theme-context";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <HeadphonesPage title='headphones app' />
      </Layout>
    </ThemeContextProvider>
  );
};
