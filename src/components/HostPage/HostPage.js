import React from "react";
import HostHeader from "../HostHeader/HostHeader";
import Footer from "../Footer/Footer";
import HostForm from "../hostForm/HostForm";
import Castle from "../HostMainComponents/Castle";
import Explore from "../HostMainComponents/Explore";
import Host from "../HostMainComponents/Host";
import Host_help from "../host_help/Host_help";
import "./host.css";
function HostPage() {
  return (
    <>
      <HostHeader />
      <Host />
      <Explore />
      <Castle />
      <HostForm />
      <Host_help />
      <Footer />
    </>
  );
}

export default HostPage;
