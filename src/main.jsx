import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./pages/error-page";
import Contact, { loader as contactLoader } from "./routes/contact";

import { action as editAction } from "./routes/edit";

import EditContact from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";

//* data res
import DataRes from "./components/routes/dataRes";
import DataEditComponent from "./components/routes/dataEdit";
//* private
import RequireAuth from "./auth/RequireAuth";
import RegisterAndLogin from "./auth/RegisterAndLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Root />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
    //* call và load data từ bên contact
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
      {
        path: "data",
        element: <DataRes />,
      },
      {
        path: "data/dataDeatail/:dataId",
        element: <DataEditComponent />,
      },
    ],
  },
  {
    path: "/login",
    element: <RegisterAndLogin />,
  },
  {
    path: "/hello",
    element: <>test sample</>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

let AuthContext = React.createClass(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

function AuthProvider({ children }) {
  let [user, setUser] = React.userState(null);

  let sigin = (newUser, callback) => {
    return fakeAuthProvider.sigin(() => {
      setUser(newUser);
      callback;
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback;
    });
  };

  let value = { user, sigin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
