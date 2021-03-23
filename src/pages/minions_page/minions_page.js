import React, { useState } from "react";
import HomePageHeader from "../../components/header/home_page/home_page_header";
import MinionsGrid from "../../components/grid/minions_grid/minions_grid";
import "./minions_page.scss";

const MinionsPage = () => {

  return (
    <div className="page_layout">
      <HomePageHeader />
      <MinionsGrid/>
    </div>
  );
};

export default MinionsPage;
