import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAJVfdIJMFKpXAAYv_51LdCf1bhLp7qusk",
  authDomain: "financer-6a3ac.firebaseapp.com",
  databaseURL: "https://financer-6a3ac.firebaseio.com",
  projectId: "financer-6a3ac",
  storageBucket: "financer-6a3ac.appspot.com",
  messagingSenderId: "965462156628"
}

const baseApp = firebase.initializeApp(config);
const base = Rebase.createClass(baseApp.database());

export default base