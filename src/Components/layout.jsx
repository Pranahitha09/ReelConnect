import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import Footer from "./footer.jsx"; 
const Layout = () => {
  return (
    <>
      <Header /> {/* ✅ Header is always visible */}
      <Outlet />  {/* ✅ Page content loads here */}
      <Footer />  {/* ✅ Footer is now on all pages */}
    </>
  );
};

export default Layout;
