import  {RouterProvider, createBrowserRouter} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile"

const router = createBrowserRouter([
  {path: "/", element: <Homepage/>},
  {path: "/login", element: <Login/>},
  {path: "/register", element: <Register/>},
  {path: "/profile", element: <Profile/>}
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
