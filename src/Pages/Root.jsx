import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "../Components/Header/Header";
import { YoutubeApiProvider } from "../context/YoutubeApiContext";

const queryClient = new QueryClient();
export default function Root() {
  return (
    <div>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </div>
  );
}
