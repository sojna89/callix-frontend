import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactGA from 'react-ga';

const firebaseConfig = {
  apiKey: "AIzaSyAJTsVXgXKILmRO_oVIIcmk5m2rEEkGerk",
  authDomain: "callix-test.firebaseapp.com",
  projectId: "callix-test",
  storageBucket: "callix-test.appspot.com",
  messagingSenderId: "780410305533",
  appId: "1:780410305533:web:ce64e76c4e4d65c2d3b794",
  measurementId: "G-5PWG1WZZWB"
};

const bootstrapAnalytics = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  ReactGA.initialize('UA-231923385-1');
}

export default bootstrapAnalytics;