import React, { useState } from "react";
import HostHeader from "../HostHeader/HostHeader";
import Footer from "../Footer/Footer";
import HostForm from "../hostForm/HostForm";
import Castle from "../HostMainComponents/Castle";
import Explore from "../HostMainComponents/Explore";
import Host from "../HostMainComponents/Host";
import Host_help from "../host_help/Host_help";
import Safty from "../HostMainComponents/Safty";
import "./host.css";
function HostPage() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <HostHeader navbar={navbar} setNavbar={setNavbar} />
      <Host navbar={navbar} />
      <Explore />
      <Castle />
      <Safty />
      <HostForm />
      <Host_help />
      <Footer />
    </>
  );
}

export default HostPage;
