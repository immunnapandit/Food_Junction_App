import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import {Footer} from './components/Footer';
// import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';
import {Provider} from "react-redux";
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () =>{

  // const [userName, setUserName] = useState();

  // //authentication
  // useEffect(()=>{
  //   //Make an API Call and send username and Password
  //   const data = {
  //     name: "Munna Kumar"
  //   };
  //   setUserName(data.name);
  // },[]);

  return(
    <Provider store={appStore}>
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </Provider>

  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About/>
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery/>
          </Suspense>
        )
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <Signup/>
      }
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);

export default AppLayout;
