import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss'



class SignUp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      }
   }

   handelSubmit = async event => {
      event.preventDefault()

      const { password, confirmPassword, email, displayName } = this.state

      if (password !== confirmPassword) {
         alert("password don't match");
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);

         createUserProfileDocument(user, { displayName });

         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
         });
      }
      catch (error) {
         console.error(error);
      }
   };

   handleChange = event => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
   }

   render() {

      const { displayName, email, password, confirmPassword } = this.state

      return (
         <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span className="option">sine up with your email and password</span>
            <form onSubmit={this.handelSubmit} className="sign-up-form">
               <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  label="display Name"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <FormInput
                  type='email'
                  name='email'
                  value={email}
                  label="Email"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <FormInput
                  type='password'
                  name='password'
                  value={password}
                  label="Password"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  label="Confirm Password"
                  onChange={this.handleChange}
                  required>
               </FormInput>
               <CustomButton type='submit'>Sign up</CustomButton>
            </form>
         </div>
      );
   }
}

export default SignUp;