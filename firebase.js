import * as firebase from "firebase";
import {firebaseConfig} from "./secrets";

export default (!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app());