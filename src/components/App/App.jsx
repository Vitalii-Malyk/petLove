import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import Layout from "../Layout/";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/authSelectors";
import { refreshUser } from "../../redux/auth/authOperation";
import { Loader } from "../Loader";

const Home = lazy(() => import("../../Pages/Home"));
const News = lazy(() => import("../../Pages/News"));
const Notices = lazy(() => import("../../Pages/Notices"));
const Friends = lazy(() => import("../../Pages/Friends"));
const Registration = lazy(() => import("../../Pages/Registration"));
const Login = lazy(() => import("../../Pages/Login"));
const Profile = lazy(() => import("../../Pages/Profile"));
const NotFound = lazy(() => import("../../Pages/NotFound"));
const AddPet = lazy(() => import("../../Pages/AddPet"));

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
          <Route path="/notices" element={<Notices />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <ToastContainer /> */}
    </>
  );
};
export default App;
