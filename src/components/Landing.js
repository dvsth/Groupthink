// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import ThoughtCanvas from './ThoughtCanvas';
import '../styles/landing.css';

// --- Configure Firebase ---
// It is incredible to me that API keys can be exposed like this,
// but it works because of how database security rules are set on
// Firebase. There are 0 security issues with this.
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

  state = {
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }


  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="landing-page">
          <div className="landing-card">
            <div className="landing-title">
              groupthink
          </div>
            <div className="landing-subtitle">
              unleash your ideas like never before
          </div>
            <div className="landing-text">
              <em>groupthink</em> is a real-time collaborative platform that brings the power of the web into a new type of document.
            Gone are the days of static, unidimensional word docs and spreadsheets. <em>groupthink</em> is a live document that seamlessly
            integrates video, text, images, links, Tweets, Spotify playlists, Charts, and much more in an easy-to-use interface.
          </div>
            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        </div>
      );
    }
    return (
      <ThoughtCanvas userName={firebase.auth().currentUser.displayName} />
    );
  }
}