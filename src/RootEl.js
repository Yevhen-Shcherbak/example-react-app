import { Navigate, Outlet, redirect } from "react-router-dom";
import { Signin } from "./Components/Signin"

export default function RootEl() {
    if(localStorage.user1) {
        return <Navigate to="books" />
    } else {
        return <Navigate to= "signin" />
    }
}