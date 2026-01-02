import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { TodayPage } from "../../pages/TodayPage";
import { SetupPlanPage } from "../../pages/SetupPlanPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <TodayPage /> },
      { path: "setup", element: <SetupPlanPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
