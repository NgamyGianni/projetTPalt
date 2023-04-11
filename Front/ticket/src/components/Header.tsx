import { useEffect, useState } from 'react'
import { Navbar, Button } from "@nextui-org/react";
import { useHref } from 'react-router-dom';
import { useLogin } from '../contexts/loginContext';
import { useNavigate, useLocation} from 'react-router-dom';
import { usePanier } from '../contexts/PanierContext';
import Panier from '../pages/Panier';

const Header = () => {
  
  const [stateFocus, setStateFocus] = useState(
                  {login:false,signUp:false, reservation:false});
  const {userConnect, setUserConnect} = useLogin();
  const {panierVisible,setPanierVisible} = usePanier();

  let navigate = useNavigate();
  let location = useLocation();
  const borderButton={
    border:"2px solid red"
  }
  const handleLogin=()=>{
    setStateFocus({login:true,signUp:false, reservation:false});
    navigate("/authentification")
  }
  const handleSignUp=()=>{
    setStateFocus({login:false,signUp:true, reservation:false})
    //console.log(stateLogin);
    navigate("/register")
  }
  const handleReservation=()=>{
    setStateFocus({login:true,signUp:false, reservation:true});
    navigate("/reservation")
  }
  const handleLogOut=()=>{
    setUserConnect({"isConnected" : false})
    setStateFocus({login:false,signUp:false, reservation:false})
    //console.log(stateLogin);
    //navigate("/register")
  }
  const handlePanier = () => {navigate("/panier")}
  useEffect(()=>{
    //console.log(location)
    if(location.pathname=="/authentification"){
      //console.log("I am here "+location.pathname)
      setStateFocus({login:true, signUp:false, reservation:false});
      //stateBorder = {login:stateFocus.stateLogin&&!userConnect.isConnected, signUp:false}
    }
    if(location.pathname=="/register"){
      //console.log("I am here "+location.pathname)
      setStateFocus({login:false, signUp:true, reservation:false });
    }
    if(location.pathname=="/reservation"){
      //console.log("I am here "+location.pathname)
      setStateFocus({login:false, signUp:true, reservation:true });
    }
    
    return ()=>{
      setStateFocus({login:false, signUp:false, reservation:false})
      //console.log("cleanup")
    }
    
  },[location])
  return (
    <Navbar style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,46,161,1) 82%, rgba(0,91,110,1) 100%)' }}  isBordered variant={"floating"}>
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
                        onPress={handleLogin} 
                        style={stateFocus.login&&!userConnect.isConnected?borderButton:{}}>
                    Login 
                  </Button>
                </Navbar.Link>
                <Navbar.Link color="inherit" >
                  <Button auto flat
                      onPress={handleSignUp} 
                      style={stateFocus.signUp&&!userConnect.isConnected?borderButton:{}}>
                    Sign Up
                  </Button>
                </Navbar.Link>
            </Navbar.Content>
              : 
            <Navbar.Content>
              <Navbar.Item>
                <Button auto flat  onPress={handleLogOut}>
                  Log Out
                </Button>
              </Navbar.Item>
              <Navbar.Link color="inherit" >
                  <Button auto flat
                      onPress={handleReservation}
                      style={stateFocus.reservation&&userConnect.isConnected?borderButton:{}}>
                    reservation
                  </Button>
              </Navbar.Link>
            </Navbar.Content>
            
          }
          {userConnect.isConnected ? 
          <Navbar.Item>
            <Button color="default" onClick={(e) => {setPanierVisible(!panierVisible)}}>Panier</Button>
          </Navbar.Item> : ""}
        </Navbar.Content>
        {userConnect.isConnected ?  <Panier/> : ""}
    </Navbar>
  )
}

export default Header