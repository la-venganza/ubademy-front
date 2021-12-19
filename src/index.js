import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import App from './App.jsx';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVLmg2BcyF7GJAQiQtXfaCwP8IpQ3FyME',
  authDomain: 'ubademy.firebaseapp.com',
  projectId: 'ubademy',
  storageBucket: 'ubademy.appspot.com',
  messagingSenderId: '1015875109053',
  appId: '1:1015875109053:web:2570fb1cc4f0801a2ab7d4',
};

const app = initializeApp(firebaseConfig);
console.log(1);

ReactDOM.render(<App />, document.querySelector('#root'));
