"use client";
import { createSession, getSession } from "@/store/global-slice";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";
type Props = {};

const HomePageContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const session = useSelector(getSession);
  useEffect(() => {
    dispatch(createSession());
  }, [dispatch]);
  console.log(session);
  return <div>HomePageContainer</div>;
};

export default HomePageContainer;
