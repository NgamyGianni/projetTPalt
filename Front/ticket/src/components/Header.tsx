import { useEffect, useState } from 'react'
import { Navbar, Button } from "@nextui-org/react";
import { useHref } from 'react-router-dom';
import { useLogin } from './LoginContext';
import { useNavigate, useLocation} from 'react-router-dom';
const Header = () => {
  
  const [stateFocus, setStateFocus] = useState({login:false,signUp:false});
  const {userConnect, setUserConnect} = useLogin();
  let navigate = useNavigate();
  let location = useLocation();
  const borderButton={
    border:"2px solid red"
  }
  const handleLogin=()=>{
    setStateFocus({login:true,signUp:false});
    navigate("/authentification")
  }
  const handleSignUp=()=>{
    setStateFocus({login:false,signUp:true})
    //console.log(stateLogin);
    navigate("/register")
  }
  const handleReservation=()=>{
    //setStateFocus({login:true,signUp:false});
    navigate("/reservation")
  }
  const handleLogOut=()=>{
    setUserConnect({"isConnected" : false})
    setStateFocus({login:false,signUp:false})
    //console.log(stateLogin);
    //navigate("/register")
  }
  useEffect(()=>{
    console.log(location)
    if(location.pathname=="/authentification"){
      console.log("I am here "+location.pathname)
      setStateFocus({login:true,signUp:false});
      //stateBorder = {login:stateFocus.stateLogin&&!userConnect.isConnected, signUp:false}
    }
    if(location.pathname=="/register"){
      console.log("I am here "+location.pathname)
      setStateFocus({login:false,signUp:true});
    }
    
    
    return ()=>{
      setStateFocus({login:false,signUp:false})
      console.log("cleanup")
    }
    
  },[location])
  return (
    <Navbar isBordered variant={"floating"}>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/" >Home</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {
            !userConnect.isConnected ?
            <Navbar.Content>
                {/* <Navbar.Link color="inherit" href="/iden" onClick={() => setState({"isConnected" : true})}> */}
                <Navbar.Link color="inherit" >
                  <Button  auto flat
                        onClick={handleLogin} 
                        style={stateFocus.login&&!userConnect.isConnected?borderButton:{}}>
                    Login 
                  </Button>
                </Navbar.Link>
                <Navbar.Link color="inherit" >
                  <Button auto flat
                      onClick={handleSignUp} 
                      style={stateFocus.signUp&&!userConnect.isConnected?borderButton:{}}>
                    Sign Up
                  </Button>
                </Navbar.Link>
            </Navbar.Content>
              : 
            <Navbar.Content>
              <Navbar.Item>
                <Button auto flat  onClick={handleLogOut}>
                  Log Out
                </Button>
              </Navbar.Item>
              <Navbar.Link color="inherit" >
                  <Button auto flat
                      onClick={handleReservation}
                      style={stateFocus.signUp&&!userConnect.isConnected?borderButton:{}}>
                    reservation
                  </Button>
              </Navbar.Link>
            </Navbar.Content>
            
          }
          <Navbar.Link color="inherit" href="#">
            Panier
          </Navbar.Link>
        </Navbar.Content>
    </Navbar>
  )
}

export default Header