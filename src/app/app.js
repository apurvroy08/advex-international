"use client";

import { Provider } from "react-redux";
import Header from "./component/Header";
import { Box } from "@mui/material";
import Footer from "./component/Footer";
import store from "@/redux/store";

function MyApp({ children }) {
  return (
    <Provider store={store}>
      <Header />
      <Box sx={{ paddingTop: "101px" }}>{children}</Box>
      <Footer />
    </Provider>
  );
}


export default MyApp;
