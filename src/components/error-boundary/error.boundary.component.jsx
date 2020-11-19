import React from 'react';

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error.boundary.styles';

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true };
   }

   componentDidCatch(error, errorInfo) {
      console.log(error)
   }

   render() {
      if (this.state.hasError) {
         return (
            <ErrorImageOverlay>
               <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
               <ErrorImageText>Sorry, This Page is Broken</ErrorImageText>
            </ErrorImageOverlay>
         )
      }

      return this.props.children;
   }
}

export default ErrorBoundary