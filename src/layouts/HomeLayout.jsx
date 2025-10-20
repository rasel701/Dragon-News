import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navber from "../Components/Navber";
import LeftAside from "../Components/homelaout/LeftAside";
import { Outlet, useNavigation } from "react-router";
import RightAside from "../Components/homelaout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <div className="w-11/12 mx-auto my-3">
          <Navber />
        </div>
      </header>
      <main className="w-11/12 mx-auto my-5  grid grid-cols-12 gap-4 ">
        <aside className="col-span-3 h-fit sticky top-5">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          {state === "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 h-fit sticky top-5">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
