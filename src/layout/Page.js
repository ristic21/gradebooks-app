import { Footer } from "./Footer";
import { Header } from "./Header";

export const Page = ({ isAuthenticated, setIsAuthenticated, handleLogout, children }) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  );
};
