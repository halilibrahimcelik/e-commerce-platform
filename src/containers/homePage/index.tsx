import {
  createSession,
  fetchProducts,
  getLoading,
  getProducts,
  getSession,
} from "@/store/global-slice";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "@/components/wrapper";
type Props = {};

const HomePageContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const session = useSelector(getSession);
  const loading = useSelector(getLoading);
  const productList = useSelector(getProducts);
  const memoizedThunks = useMemo(() => {
    return () => {
      dispatch(createSession())
        .then(() => dispatch(fetchProducts()))
        .catch((error) => console.error("error chaining async thunks", error));
    };
  }, [dispatch]);

  useEffect(() => {
    memoizedThunks();
  }, [memoizedThunks]);
  return (
    <Wrapper component="section">
      <div className="fixed z-[-1]  bg-gradient-to-b from-[#dde9f893] from-80% to-[#f6f9fc] to-100% top-0 left-0 right-0 bottom-0"></div>
    </Wrapper>
  );
};

export default HomePageContainer;
