import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LetestNews from "../components/LetestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      {/* Header section containing the main header */}
      <header className="py-10">
        <Header></Header>
        {/* Section for displaying the latest news */}
        <section className="w-11/12 mx-auto my-3">
          <LetestNews></LetestNews>
        </section>
        {/* Navigation bar */}
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      {/* Main content area with a grid layout */}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        {/* Left sidebar */}
        <aside className="col-span-3 sticky h-fit top-0">
          <LeftAside></LeftAside>
        </aside>
        {/* Main content section */}
        <section className="main_container col-span-6">
          <Outlet></Outlet>
        </section>
        {/* Right sidebar */}
        <aside className="col-span-3 sticky h-fit top-0">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
