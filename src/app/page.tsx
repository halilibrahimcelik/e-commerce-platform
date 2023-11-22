"use client";
import HomePageContainer from "@/containers/homePage";
import StoreProvider from "@/store/provider";
import Image from "next/image";

export default function Home() {
  return (
    <StoreProvider>
      <HomePageContainer />
    </StoreProvider>
  );
}
