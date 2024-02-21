

import React from 'react';
import { 
    createHashRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider} from 'react-router-dom';
import Signin from './Components/Signin';
import Books from "./Components/Header/Books";
import RootEl from './RootEl';
import ProtectedRoute from './Components/ProtectedRoute';
import Cart from './Components/Cart';


const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route  path="/" element= {<Navigate to = { localStorage.user1 ? "books" : "signin" } />} />               
            <Route  path= "signin" element= {<Signin />} />
            <Route element= {<ProtectedRoute/>}>
                <Route  path="books" element= {<Books />} />
                <Route  path="cart" element= {<Cart />} />
            </Route>
            
        </> 
    )
)

function App() {
return (
    <RouterProvider router= {router}/>
);
}

export default App