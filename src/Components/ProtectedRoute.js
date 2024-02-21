import { Navigate, Outlet, NavLink } from "react-router-dom";


import Svg from "./Header/cart.svg";



import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';



const ProtectedRoute = () => {
    if (!localStorage.user1) {
      return <Navigate to="/signin" replace />;
    }
  
    return (
        <div>
        <Navbar expand="lg" className="bg-primary">
            <Container fluid>
                <div className="logo-homeLink d-none d-sm-block">
                        <div className="logo-container">
                        <Image className = 'rp-10'src= {require ('./Header/flg_logo.png')}  
                        fluid alt="logo" 
                        width={80}/>
                    </div>
                </div>
                <NavLink to="/books" >X-course task / Yevhen Shcherbak </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink to = "/cart" variant="primary">
                    <Image src= { Svg }  
                            fluid alt="logo" 
                            width={40}/>
                    <Badge bg="secondary">9</Badge>
                    <span className="visually-hidden" >unread messages</span>
                    </NavLink >
                    
                    <NavLink to= "/signin" 
                    className='text-justify '
                    onClick={() => {
                        
                        localStorage.clear();

                    }}>Log out
                    </NavLink>
                </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet/>
        </div>
    );
};

export default ProtectedRoute;



