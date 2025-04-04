import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainRouter from './pages/MainPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import Post from './pages/post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRouter />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/post/:id',
        element: <Post />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router;
