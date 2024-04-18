import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader";
import { Header } from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
