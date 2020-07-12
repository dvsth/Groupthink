// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import ThoughtCanvas from './ThoughtCanvas';

// Configure Firebase
// exposing the config is not an issue, it is meant to be public
const firebaseConfig = {
    apiKey: "AIzaSyDuqZwffzcu636XU9COmVDDni0aJDZA62M",
    authDomain: "groupthink-d9cb0.firebaseapp.com",
    databaseURL: "https://groupthink-d9cb0.firebaseio.com",
    projectId: "groupthink-d9cb0",
    storageBucket: "groupthink-d9cb0.appspot.com",
    messagingSenderId: "786995122742",
    appId: "1:786995122742:web:accc83cd03595f312bfe97",
    measurementId: "G-ZQNXFX9QGJ"
  };

firebase.initializeApp(firebaseConfig);

export default class Landing extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
    
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>Sign in!</h1>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
     <ThoughtCanvas />
    );
  }
}