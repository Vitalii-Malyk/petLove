import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import Layout from "../Layout/";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/authSelectors";
import { refreshUser } from "../redux/auth/authOperation";
import { Loader } from "./Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const News = lazy(() => import("../pages/News/News"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
};
export default App;
