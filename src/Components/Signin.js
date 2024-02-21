import { NavLink } from "react-router-dom";

export default function Signin() {

    const handleUser = () => {
        const user = document.getElementById('login').value;
        localStorage.setItem('user1', user)
    }

    return (
        <div>
            <h1>user</h1>
            <input type="text" id="login"/>
            <NavLink to ="/books" onClick={handleUser}>Log in</NavLink>
        </div>
    )
}