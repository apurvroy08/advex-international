"use client";
import { Box, Skeleton, Typography } from "@mui/material";
import ReadingCorner from "./component/ReadingCorner";
import WhyAdvex from "./component/WhyAdvex";
import SimpleSlider from "./component/SimpleSlider";
import Magazine from "./component/Magazine";
import Holidays from "./component/Holidays";
import HeroSection from "./component/HeroSection";
import { getPackageCategories } from "@/services";
import { useEffect, useState } from "react";
import PackageCategories from "./component/PackageCategories";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Loader from "./component/Loader";
import { hotjar } from 'react-hotjar'
import SkeletonComponent from "./component/Skeleton";
import Head from "next/head";

export default function Home() {
  const [packageCategories, setPackageCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPackageCategoriesAsync();
    hotjar.initialize(3862441, 6)
  }, []);

  const getPackageCategoriesAsync = async () => {
    setIsLoading(true);
    const res = await getPackageCategories();
    setPackageCategories(res?.data?.data?.items);
    setIsLoading(false);
  };


  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" />
      </Head>

      <Box sx={{ fontFamily: 'Poppins, sans-serif' }}>
        {
          isLoading ? (
            <SkeletonComponent />
          ) : (
            <Box>
              <Provider store={store}>
                <HeroSection />
                {packageCategories?.map((pc, index) => (
                  <PackageCategories key={index} data={pc} />
                ))}
                {/* <ReadingCorner /> */}
                <WhyAdvex />
                <Holidays />
                {/* <Magazine /> */}
              </Provider>
            </Box>
          )
        }
      </Box>
    </>

  );
}
