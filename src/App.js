import  {RouterProvider, createBrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/UserProfile";
import BecomeAShopper from "./pages/BecomeAShopper";
import ShopperSignIn from "./pages/shopperSingin";
import ShopperRegister from "./pages/shopperRegister";
import ShopperProfile from "./pages/shopperProfile";
import ManageItemList from "./pages/ManageItemListPage";
import RidersPage from "./pages/ridersPage";
import ViewItemsListPage from "./pages/ViewItemsListPage";
import ReviewsPage from "./pages/ReviewsPage";

const router = createBrowserRouter([
  {path: "/", element: <Homepage/>},
  {path: "/login", element: <Login/>},
  {path: "/register", element: <Register/>},
  {path: "/UserProfile", element: <Profile/>},
  {path: "/BecomeAShopper", element: <BecomeAShopper/>},
  {path: "/shopperSignin", element: <ShopperSignIn/>},
  {path: "/shopperRegister", element: <ShopperRegister/>},
  {path: "/shopperProfile", element: <ShopperProfile/>},
  {path: "/ManageItemListPage", element: <ManageItemList/>},
  {path: "/ridersPage", element: <RidersPage/>},
  {path: "/ViewItemsListPage", element: <ViewItemsListPage/>},
  {path: "/ReviewsPage", element: <ReviewsPage/>},
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
