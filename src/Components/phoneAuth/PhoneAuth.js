import React, { Component } from "react";
import "../phoneAuth/phoneAuth.css";

export default class PhoneAuth extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-header">
          <div class="header row">
            <i
              class="fas fa-angle-left fa-lg mt-2 mr-2 col-2"
              style={{ cursor: "pointer" }}
            />
            <span class="col-8"> Confirm your number</span>
          </div>
        </div>
        <div class="card-body">
          <p>Enter the code we sent over SMS to +20 01100634348:</p>
          <div class="row ml-1">
            <input id="phone-1" class="phone-auth mr-3 " />
            <input id="phone-2" class="phone-auth mr-3" />
            <input id="phone-3" class="phone-auth mr-3" />
            <input id="phone-4" class="phone-auth" />
          </div>
          <div class="more ml-1 mt-2">
            <div class="row">
              <p class="ml-1">Didn't get a code?</p>
              <a href="#" class="ml-2">
                More options
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
