"use client";
import HomePageContainer from "@/containers/homePage";
import CustomTheme from "@/containers/homePage/theme";
import StoreProvider from "@/store/provider";

export default function Home() {
  return (
    <CustomTheme>
      <StoreProvider>
        <HomePageContainer />
      </StoreProvider>
    </CustomTheme>
  );
}
