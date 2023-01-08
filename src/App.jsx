import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Root from "./Pages/Root";
import Error from "./Pages/Error";
import Main from "./Pages/Main/Main";
import VideoDetail from "./Pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main /> },
      { path: "/videos", element: <Main /> },
      { path: "/videos/:key", element: <Main /> },
      { path: "/videos/watch/:video Id", element: <VideoDetail /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
