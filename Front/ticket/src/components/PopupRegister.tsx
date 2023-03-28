import React,{useState} from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

function PopupRegister() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const handler = () => setVisible(true);
    const closeHandler = () => {
    setVisible(false);
    navigate("/authentification");
    console.log("closed");
    };
    
  return (
    <div>
      {/* <Button auto ghost color="error" onPress={handler}>
        Open modal
      </Button> */}
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} h1>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text color='#fff'>Your account is successully created</Text>
          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          {/* <Button auto onPress={closeHandler}>
            Sign in
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PopupRegister