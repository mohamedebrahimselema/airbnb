import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Signup.css";
function SignUp() {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div className="signup-container">
        <div className="finish-signup">
          <h5 className="text-center">Finish signing up</h5>
        </div>
        <form action="">
          <div className="full-name">
            <div className="name-input">
              <input
                type="text"
                name="firstName"
                id="fName"
                placeholder="First name"
              />
            </div>
            <div className="name-input last-name">
              <input
                type="text"
                name="lastName"
                id="lName"
                placeholder="Last name"
              />
            </div>
          </div>
          <span>Make sure it matches the name on your government ID.</span>
          <br />
          <div className="input-container">
            <TextField
              id="date"
              label="Birthday"
              type="date"
              style={{ width: "100%" }}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <span>
            To sign up, you need to be at least 18. Your birthday won’t be
            shared with other people who use Airbnb.
          </span>
          <br />
          <div className="input-container">
            <input
              type="email"
              name="BirthDate"
              id="email"
              placeholder="Email"
            />
          </div>
          <span>We'll email you trip confirmations and receipts.</span>
          <br />
          <div className="input-container">
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Birthdate"
            />
          </div>
          <span>
            By selecting Agree and continue below, I agree to Airbnb’s
            <a href="#">Terms of Service</a> ,
            <a href="#">Payments Terms of Service</a> ,{" "}
            <a href="#">Privacy Policy</a>, and{" "}
            <a href="#">Nondiscrimination Policy</a>.
          </span>
          <br />
          <button className="agree-btn">Agree and continue</button>
          <span>
            Airbnb will send you members-only deals, inspiration, marketing
            emails, and push notifications. You can opt out of receiving these
            at any time in your account settings or directly from the marketing
            notification.
          </span>
          <br />
          <div className="send-reminder">
            <input type="checkbox" name="keep_contact" id="checkBox" />
            <label htmlFor="checkBox">
              I don’t want to receive marketing messages from Airbnb.
            </label>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
