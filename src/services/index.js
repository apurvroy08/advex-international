// import axios from "axios";
import { apiEndPointsConfig } from "./apiEndPointsConfig";
import { axiosInstance } from "./axiosInstance";

export const getHeroBanner = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.heroBanner);
    return res;
  } catch (err) {
    return err;
  }
};

export const getPackageCategories = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.packageCategories);
    return res;
  } catch (err) {
    return err;
  }
};

export const getPackages = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.packages);
    return res;
  } catch (err) {
    return err;
  }
};

export const getBlog = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.blog);
    return res;
  } catch (err) {
    return err;
  }
};


export const getDestination = async () => {
  try {
    const res = await axiosInstance.get(apiEndPointsConfig.destination);
    return res;
  } catch (err) {
    return err;
  }
};