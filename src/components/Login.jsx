import { BG_IMG } from "../utils/constants";
import { useState, useRef } from "react";
import backendAPI from "../utils/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSignIn, setIsSignIn] = useState(true);
    const [showError, setShowError] = useState(null); //use it

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignInToggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleLogin = async () => {
        const res = await backendAPI.post('/auth/login', { email: email.current.value, password: password.current.value });

        if (res.data.user) {
            dispatch(addUser({ user: res.data.user }));
            navigate("/browse");
        } else {
            console.log(res.error);
        }
    }
    return (
        <div className="login-page">
            <img className='absolute w-full' src={BG_IMG}></img>
            <form className="absolute px-10 py-10 mx-130 my-40 w-3/12 text-white bg-black opacity-80  rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <h1 className="text-2xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" ref={name} placeholder="name" className="p-4 m-2 bg-gray-700 w-full rounded-lg"></input>}
                <input type="text" ref={email} placeholder="email" className="p-4 m-2 bg-gray-700 w-full rounded-lg"></input>
                <input type="password" ref={password} placeholder="password" className="p-4 m-2 bg-gray-700 w-full rounded-lg"></input>
                <button className="p-4 m-2 bg-red-700 w-full rounded-lg cursor-pointer" onClick={handleLogin}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 text-xs cursor-pointer" onClick={handleSignInToggle}>{isSignIn ? "new to Netflix? Sign Up" : "Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;