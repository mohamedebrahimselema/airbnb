import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
function HostForm() {
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  return (
    <section className="host-form-container">
      <div className="row">
        <div className="col-md-5 col-12">
          <span>See WHAT"S POSSIBLE</span>
          <br />
          <h1>Earn up to $2 a month hosting in Cairo</h1>
          <a href="#">How we estimate your earnings potentail</a>
        </div>
        <div className="col-md-6 col-12">
          <h3>Tell us more about your place and we'll update your estimate</h3>
          {/* host form  */}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              style={{ width: "70%" }}
            />
            <br />
            <InputLabel htmlFor="Sharing">Sharing</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "Sharing",
              }}
              style={{ width: "70%" }}
            >
              <option aria-label="None" value="" />
              <option value="Entire place">Entire place</option>
              <option value="Privite room">Privite room</option>
              <option value="Shared room">Shared room</option>
            </Select>
            <InputLabel htmlFor="guests">Guests</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "age",
                id: "guests",
              }}
              style={{ width: "70%" }}
            >
              <option aria-label="None" value="" />
              <option value="0 guests">0 guests</option>
              <option value="1 guests">1 guests</option>
              <option value="2 guests">2 guests</option>
              <option value="3 guests">3 guests</option>
              <option value="4 guests">4 guests</option>
            </Select>

            <br />
            <button className="form-btn" type="submit">
              Start your listing
            </button>
          </form>
          <div className="row"></div>
        </div>
      </div>
    </section>
  );
}

export default HostForm;
