import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddPost from "./Pages/AddPost";
import EditPost from "./Pages/EditPost";
import RootLayout from "./Pages/RootLayout";
import PostList from "./Pages/PostList";
import ErrorPage from "./Pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "post/add",
        element: <AddPost />,
      },
      {
        path: "post/:id/edit",
        element: <EditPost />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "Text of error....",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
