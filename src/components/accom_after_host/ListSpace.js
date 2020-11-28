import React from "react";
import Select from "@material-ui/core/Select";
import ListCountries from './ListCountries'
import './ListSpace.css'
function ListSpace() {

 const counter =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]



    const [state, setState] = React.useState({
        room: "",
        numbers_guest:"",
        place_type:"",
        numbers_bedroom:"",
        numbers_beds:"",
        country:"",
        city:"",
        State:"",
        address:"",
        price:"",
        describtion:""
      });

    const handleChange = event => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      //*****print data in console*******
    const getHostData = ()=>{
      console.log(state)
    }

  return (
    <div className="row">
      <div className="col-lg-7 col-md-10 ">
      <div className="acco-container">
          <div className="acco-header">
              <h2>Hi, there! Let’s get started listing your space.</h2>
          </div>
          <div className="steps">
              <span>Step1</span><br/>
              <h3>What kind of place do you have?</h3>
          </div>
          <div className="place-guest">
            <div className="host-place">
            <Select
              native
              value={state.room}
              onChange={handleChange}
              inputProps={{
                name: "room",
              }}
              style={{ width: "100%",padding:"1rem" }}
            >
              <option aria-label="None" value="" />
              <option value="Entire place">Entire place</option>
              <option value="Privite room">Privite room</option>
              <option value="Shared room">Shared room</option>
            </Select>
            </div>


            <div className="host-guest">
            <Select
              native
              value={state.numbers_guest}
              onChange={handleChange}
              inputProps={{
                name: "numbers_guest",
              }}
              style={{ width: "100%",padding:"1rem" }}
            >
              <option aria-label="None" value="" />
            {counter.map((guest,i)=><option key={i} value={`${guest}`}>{`For ${guest} guest`}</option>)}
            </Select>
            </div>
          </div>
         <span> Choose a property type</span>
          <Select
              native
              value={state.place_type}
              onChange={handleChange}
              inputProps={{
                name: "place_type",
              }}
              style={{ width: "100%",padding:"1rem" }}
            >
              <option aria-label="None" value="" />
              <option value="Appartment">Appartment</option>
              <option value="House">House</option>
              <option value="Secondary unit">Secondary unit</option>
              <option value="Unique space">Unique space</option>
              <option value="Bed and breakfast">Bed and breakfast</option>
              <option value="Boutique hotel">Boutique hotel</option>
            </Select>


            <div className="bedrooms">
              <span>How many bedrooms can guests use?</span><br/>
              <Select
              native
              value={state.numbers_bedroom}
              onChange={handleChange}
              inputProps={{
                name: "numbers_bedroom",
              }}
              style={{ width: "100%",padding:"1rem" }}
            >
              <option aria-label="None" value="" />
            {counter.map((bedroom,i)=><option key={i} value={`${bedroom}`}>{`${bedroom} bedroom`}</option>)}

            </Select>
            </div>

              {/* Number of beds  */}
            <div >
              <span>Numbers of beds</span><br/>
              <Select
              native
              value={state.numbers_beds}
              onChange={handleChange}
              inputProps={{
                name: "numbers_beds",
              }}
              style={{ width: "100%",padding:"1rem" }}
            >
              <option aria-label="None" value="" />
            {counter.map((bed,i)=><option key={i} value={`${bed}`}>{`${bed} bed`}</option>)}
            </Select>
            </div>

             {/* Location  */}
            <ListCountries state={state} handleChange={handleChange}/>

            {/* City and State  */}
            <h5 className="pt-3">City & State</h5>
          <div className="city-state pt-2">
            <div className="address-input">
              <input type="text" name="city"placeholder="City" onChange={handleChange} value={state.city}/>
            </div>
            <div className="address-input">
              <input type="text" name="State" placeholder="State" onChange={handleChange} value={state.State}/>
            </div>
          </div>
          <div className="place-guest">
              <input type="text" name="address" placeholder="Street" id="Adress" value={state.address} onChange={handleChange}/>
          </div>


          {/* Accomedation Details */}
            <h5 className="pt-3">Accomedation Details</h5>
          <div className="city-state pt-2">
            <div className="price-input">
              <input type="number" name="price"placeholder="Price Per Nigth $" onChange={handleChange} value={state.price}/>
            </div>
          </div>
          <div className="place-guest">
              <input type="text" name="describtion" placeholder="Describtion" id="Describe" value={state.describtion} onChange={handleChange}/>
              <button className="btn btn-primary ml-1">Upload You Place Image</button>
          </div>

          <button className="btn btn-primary" onClick={getHostData}>Continue</button>
      </div>
      </div>
      <div className="col-md-5 flower-img">
          <img src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png" alt="Flower pic"/>
      </div>
    </div>
  );
}

export default ListSpace;
