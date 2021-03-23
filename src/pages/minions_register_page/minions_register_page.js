import React from "react";
import MinionsRegisterForm from "../../components/forms/minions_register_form/minions_register_form";
import MinionsRegisterHeader from "../../components/header/minions_register_header/minions_register_header";
import "./minions_register_page.scss";

const MinionsRegisterPage = () => {
  return (
    <div className="page_layout_form">
      <MinionsRegisterHeader />
      <MinionsRegisterForm />
    </div>
  );
};

export default MinionsRegisterPage;
