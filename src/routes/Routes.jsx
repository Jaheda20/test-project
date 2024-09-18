import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import { Community } from "../Community";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Community />,
      },
    ],
  },
]);

export default router;
