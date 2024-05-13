import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";
import axios from "axios";

export const AuthContex = createContext();

const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const logedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
    //   console.log("currentUse :", currentUser);

      if (currentUser) {
        axios
          .post(`http://localhost:5000/jwt`, logedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token pai ", res.data);
          });
      }else{
        axios
          .post(`http://localhost:5000/logout`, logedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log( res.data);
          });
      }
    });
    return () => {
      return unsubscrive();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvaider;
