import Header from "./Header";
import Footer from "./Footer";

// Layout component wraps the page with Header and Footer.
// The 'children' prop renders the main content of each page.
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
