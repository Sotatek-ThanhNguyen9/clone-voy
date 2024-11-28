import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import SignInPage from 'src/page/sign-in';

/**
 * Main App routes.
 */

const RouterCustom = () => {
  // const token = useAtomValue(accessTokenAtom);

  return createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <SignInPage />,
        },
      ],
    },
  ]);
};

export default RouterCustom;
