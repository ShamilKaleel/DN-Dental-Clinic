import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col  mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
