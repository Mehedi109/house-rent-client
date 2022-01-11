import React, { useEffect, useState } from "react";
// import initializeAuth from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  // register
  const register = (email, name, password, navigate, location) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // setUser(user)
        // history.replace("/");
        navigate("/");
      })
      .finally((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  };

  // signin
  const signIn = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        // history.replace(distination);
        navigate(destination);
        // const user = result.user
        // setUser(user)
      })
      .finally(() => setIsLoading(false));
  };

  // auth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // admin
  useEffect(() => {
    if (user.email) {
      fetch(`http://localhost/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }
  }, [user.email]);

  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  // save user data in database
  const saveUser = (email, displayName) => {
    setIsLoading(true);
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then()

      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    admin,
    isLoading,
    signIn,
    register,
    logOut,
  };
};

export default useFirebase;
