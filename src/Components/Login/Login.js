import React, { Component } from 'react'
import '../Login/login.css'

export default class Login extends Component {
    render() {
        return (
             <div className="Login-card ">
        <div className="header row">
          <i className="fas fa-times mt-2 mr-2 col-2" style={{cursor: 'pointer'}} />
          <span className="col-8"> log in</span>
        </div>
        <hr />
        <div className="region">
          <select className="form-control  countryslect">
            <option>Egypt(+20)</option>
            <option value="AF">Afghanistan(+20)</option>
            <option value="AX">Åland Islands&lt;(+20)/option&gt;
            </option><option value="AL">Albania(+20)</option>
            <option value="DZ">Algeria(+20)</option>
            <option value="AS">American Samoa(+20)</option>
            <option value="AD">Andorra(+20)</option>
            <option value="AO">Angola(+20)</option>
            <option value="AI">Anguilla(+20)</option>
            <option value="AQ">Antarctica(+20)</option>
            <option value="AG">Antigua and Barbuda(+20)</option>
          </select>
          <input name="phoneNumber" className="phoneNumber" placeholder="Phone Number" autoComplete="tel-national" type="tel" aria-describedby defaultValue />
        </div>
        <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
        <button className="continue" type="button">Continue</button>
        <div>
          <div className="row" style={{marginLeft: '20px', marginTop: '30px'}}>
            <div className="col-5" style={{padding: 0}}>
              <hr />
            </div>
            <div className="col-1" style={{padding: 0, textAlign: 'center'}}>
              or
            </div>
            <div className="col-5" style={{padding: 0}}>
              <hr />
            </div>
          </div>
        </div>
        <div className="social-login">
          <button data-testid="social-auth-button-email" type="button" className="social-login__btn">
            <div>
              <div className="row p-1">
                <i className="far fa-envelope fa-lg col-2 mt-1" />
                <div className="col-8">Continue with email</div>
              </div>
            </div>
          </button>
          <button data-testid="social-auth-button-email" type="button" className="social-login__btn">
            <div>
              <div className="row p-1">
                <i className="fab fa-facebook fa-lg col-2 mt-1" style={{color: '#3b5998'}} />
                <div className="col-8">Continue with Facebook</div>
              </div>
            </div>
          </button>
          <button data-testid="social-auth-button-email" type="button" className="social-login__btn">
            <div>
              <div className="row p-1">
                <i className="fab fa-google fa-lg  col-2 mt-1" style={{color: '#DB4437'}} />
                <div className="col-8">Continue with  Google</div>
              </div>
            </div>
          </button>
          <button data-testid="social-auth-button-email" type="button" className="social-login__btn">
            <div>
              <div className="row p-1">
                <i className="fab fa-apple fa-lg col-2 mt-1" />
                <div className="col-8">Continue with Apple</div>
              </div>
            </div>
          </button>
        </div>
        <div className="new-account">
          <div className="row">
            <p className="ml-3">Don't have an account</p>
            <a href="#" className="mt-2 ml-1">Sign up</a>
          </div>
        </div>
      </div>
        )
    }
}
