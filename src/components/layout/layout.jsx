import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeButton } from "../theme-button/theme-button";

export const Layout = ({ children }) => {
  const { auth } = useAuth();

  return (
    <div>
      <ProgressBar />
      <ThemeButton />
      <Header />
      {children}
      {auth.isAuthorized && <Cart />}
      <Footer />
    </div>
  );
};
