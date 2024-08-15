import React from "react";
import { useState, useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);
  const [error, setError] = useState("");
  const data = useSelector((store)=>store.user.users);
  const email = useRef(null);
  const pwd = useRef(null);
  const username = useRef(null);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };
  const handleClick = () => {

    //sign up
    if(isSignIn){
      const [uEmail,uName,uPwd] = [email.current.value,username.current.value,pwd.current.value];
      console.log(uEmail,uName,uPwd);
      const res = dispatch(addUser({username:uName, email: uEmail, password: uPwd}));
      console.log(res);
      console.log("Successful login");
      navigate('/browse')
    }
    //sign in
    else{
      const [uEmail,uPwd] = [email.current.value,pwd.current.value];
      const user = data.filter((u) => u.email===uEmail);
  
      if(user[0].password===uPwd){
        console.log("Successful login");
        navigate('/browse')
      }
      else{
        setError("Wrong password")
        console.log("Failed");
      }
    }
    
  };

  return (
    <div className="p-5">
      <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 border bg-gray-600 rounded-md flex flex-col justify-center items-start mx-auto gap-5 p-12 ">
        <h1 className="font-bold text-white">
          {isSignIn ? "Sign Up " : "Sign In"}
        </h1>

        <input
          className="border p-2 w-full"
          ref={email}
          type="text"
          placeholder="Email address"
        />
        {isSignIn && (
          <input
            className="border p-2 w-full"
            type="text"
            ref={username}
            placeholder="Username"
          />
        )}
        <input
          className="border p-2 w-full"
          ref={pwd}
          type="password"
          placeholder="Password"
        />

        <p className="text-red-500">{error}</p>

        <button
          type="button"
          className="p-4 my-2 bg-red-700 w-full text-white rounded-lg"
          onClick={handleClick}>
          {isSignIn ? "Sign Up " : "Sign In"}
        </button>

        <div className="flex flex-row gap-5">
          <p className="text-white">
            {isSignIn ? "Already have an account?" : "Are you new to netflix?"}
          </p>
          <button
            type="button"
            className="text-white font-bold"
            onClick={toggle}>
            {isSignIn ? "Sign In " : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
