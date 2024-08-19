import { HeadphonePage } from "./components/headphone-page/headphone-page";
import { Layout } from "./components/layout/layout";

export const App = () => {
  return (
    <>
      <Layout>
        <HeadphonePage title='headphones app' />
      </Layout>
    </>
  );
};
