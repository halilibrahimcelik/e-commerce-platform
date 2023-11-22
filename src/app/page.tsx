"use client";
import HomePageContainer from "@/containers/homePage";
import StoreProvider from "@/store/provider";

export default function Home() {
  return (
    <StoreProvider>
      <HomePageContainer />
    </StoreProvider>
  );
}
