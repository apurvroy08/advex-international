"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c64f8a91-784f-464f-92cf-906c2699d7a8");
  }, []);
  return null;
};

export default CrispChat;
