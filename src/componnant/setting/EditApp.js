import React, { useState } from "react";
import Moment from 'react-moment';
import { BrowserRouter as Router, Route } from "react-router-dom";


import CardList from "./cardList"
import Personal from "./edit/Personal"
import Login from "./edit/Login"
import Payments from "./edit/Payments "
import Password from "./edit/Password"

import ConfirmPayment from "../confirmPayment/ConfirmPayment";

let date = new Moment("1993-08-03", "YYYY-MM-DD").props

console.log(date);
function EditApp() {
    const [nameState, nameSet] = useState("Ahmed Salah")
    const [emailStat, setEmail] = useState("salaheltantawy@gmail.com")
    const [emailtState, enailtSet] = useState("salaheltantawy@gmail.com")
    const [BDState, BDset] = useState(date)


    return (
        <>
            <Router>
                <Route path="/edit" exact component={() => <CardList name={nameState} email={emailtState} />} />
                <Route path="/edit/personal" exact component={() => <Personal name={nameState} email={emailStat} date={BDState} />} />
                <Route path="/edit/Payments" component={Payments} />
                <Route path="/edit/login" component={Login} />
                <Route path="/edit/login/password" component={Password} />
                <Route path="/ConfirmPayment" component={ConfirmPayment} />
            </Router >
        </>

    );
}

export default EditApp;
