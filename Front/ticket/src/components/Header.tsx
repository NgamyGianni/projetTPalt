import { useState } from 'react'
import { Navbar, Button } from "@nextui-org/react";

const Header = () => {
  const [choice, setChoice] = useState(0);
  const [state, setState] = useState({
    "isConnected" : true
  })

  return (
    <Navbar isBordered variant={"floating"}>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive={choice==0} href="#" onClick={() => setChoice(0)}>Features</Navbar.Link>
          <Navbar.Link isActive={choice==1} href="#" onClick={() => setChoice(1)}>Customers</Navbar.Link>
          <Navbar.Link isActive={choice==2} href="#" onClick={() => setChoice(2)}>Pricing</Navbar.Link>
          <Navbar.Link isActive={choice==3} href="#" onClick={() => setChoice(3)}>Company</Navbar.Link>
        </Navbar.Content>
          {
            !state.isConnected ?
              <Navbar.Content>
                <Navbar.Link color="inherit" href="#">
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
                <Navbar.Link color="inherit" href="#">
                  Panier
                </Navbar.Link>
              </Navbar.Content>
          }
    </Navbar>
  )
}

export default Header