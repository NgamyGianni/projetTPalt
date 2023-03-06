import { useState } from 'react'
import { Navbar, Button } from "@nextui-org/react";
import { useHref } from 'react-router-dom';

const Header = () => {
  const [state, setState] = useState({
    "isConnected" : false
  })

  return (
    <Navbar isBordered variant={"floating"}>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/" >Home</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          {
            !state.isConnected ?
            <Navbar.Content>
                <Navbar.Link color="inherit" href="#" onClick={() => setState({"isConnected" : true})}>
                  Login
                </Navbar.Link>
                <Navbar.Item>
                  <Button auto flat href="#">
                    Sign Up
                  </Button>
                </Navbar.Item>
            </Navbar.Content>
              : 
            <Navbar.Content>
              <Navbar.Item>
                <Button auto flat href="#" onClick={() => setState({"isConnected" : false})}>
                  Log Out
                </Button>
              </Navbar.Item>
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