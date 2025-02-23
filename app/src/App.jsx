 
import GlobalStyles from './styles/GlobalStyles'; // Import the global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter ,
  RouterProvider,
} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Food from "./Pages/Food/Food"; 
import QNA from "./Pages/QNA/QNA";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path:'/' ,
    element: <Home />
  } ,
  {
    path:'/aboutus' ,
    element: <AboutUs />
  } ,
  {
    path:'/food' ,
    element: <Food />
  } ,
  {
    path:'/qna' ,
    element: <QNA />
  } ,
  {
    path:'/signin' ,
    element: <SignIn />
  } ,
  {
    path:'/signup' ,
    element: <SignUp />
  } ,
// {
//   path:'*' ,
//   element:<NoPage />
// }
])
const App = () => {


  return (
    <>
       <GlobalStyles />
      <RouterProvider router={router} />
   
    </>
  );
};

export default App;
