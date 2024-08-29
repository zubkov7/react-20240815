import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";

export const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <ThemeButton />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
