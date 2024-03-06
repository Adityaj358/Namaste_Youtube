import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/Store";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainConatiner from "./Components/MainConatiner";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainConatiner />,
        },

        { path: "/watch", element: <WatchPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />

        {/**
         *
         * Header
         * body
         * sideBar
         *   menuItems
         * mainConatiner
         *   ButtonsList
         *   VideoConatiner
         *   videoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
