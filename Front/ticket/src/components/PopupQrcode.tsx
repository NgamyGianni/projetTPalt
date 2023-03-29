//import React,{useState} from 'react'
import { Modal, Button, Text } from '@nextui-org/react'
import { useQrcode } from '../contexts/qrcodeContext';

interface QrcodePopup{
    children:JSX.Element,
    movieName:string
}
function PopupQrcode({children, movieName}:QrcodePopup) {
    const {visibleQRcode, setVisibleQRcode} = useQrcode();
    const handler = () => setVisibleQRcode(true);
    const closeHandler = () => {
    setVisibleQRcode(false);
    console.log("closed");
    
    };
    
  return (
    <div>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visibleQRcode}
        onClose={closeHandler}
        style={{backgroundColor:"#fff"}}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} h1>
            Code de la séance {movieName}
          </Text>
        </Modal.Header>
        <Modal.Body>
        <Text>{children}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PopupQrcode