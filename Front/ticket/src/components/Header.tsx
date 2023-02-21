import { useState } from 'react'
import { Navbar } from "@nextui-org/react";

const Header = () => {
  const [count, setCount] = useState(0)

  return (
    <Navbar isBordered variant={"floating"}>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
    </Navbar>
  )
}

export default Header