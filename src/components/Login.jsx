import { BG_IMG } from "../utils/constants";
import { useState, useRef } from "react";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [showError, setShowError] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignInToggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleLogin = () => {
        const user = {
            id: "123456",
            name: "joker",
            email: "joker@gmail.com",
            role: "admin"
        }

        if (user) {
            //goto dashboard
        } else {
            //show error
        }
    }
    return (
        <div className="login-page">
            <img className='absolute w-full' src={BG_IMG}></img>
            <form className="absolute px-10 py-10 mx-130 my-40 w-3/12 text-white bg-black opacity-80  rounded-lg">
                <h1 className="text-2xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" ref={name} placeholder="name" className="p-4 m-2 bg-gray-700 w-full rounded-lg"></input>}
                <input type="text" ref={email} placeholder="email" className="p-4 m-2 bg-gray-700 w-full rounded-lg"></input>
                <input type="password" ref={password} placeholder="password" className="p-4 m-2 bg-gray-700 w-full rounded-lg"></input>
                <button className="p-4 m-2 bg-red-700 w-full rounded-lg" onClick={handleLogin}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 text-xs cursor-pointer" onClick={handleSignInToggle}>{isSignIn ? "new to Netflix? Sign Up" : "Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;