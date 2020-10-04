import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import CustomButton from '../custom-button/custom-button.component'

import './sign-in.style.scss'

class SignIn extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
      }
   }

   handleSubmit = event => {
      event.preventDefault()

      this.setState({
         email: "",
         password: "",
      })
   }

   handleChange = event => {
      const { value, name } = event.target;

      this.setState({
         [name]: value,
      })
   }

   render() {
      return (
         <div className="sign-in" onSubmit={this.handleSubmit}>
            <h2 className='title'>I already have an accout</h2>
            <span>Sign in with your email and password</span>

            <form>
               <FormInput
                  handleChange={this.handleChange}
                  name="email"
                  type="email"
                  value={this.state.email}
                  required
                  label="email" />

               <FormInput
                  handleChange={this.handleChange}
                  type="password"
                  name="password"
                  value="password"
                  value={this.state.password} required
                  label="password" />


               <div className="buttons">
                  <CustomButton type="submit">Sign in</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

export default SignIn;