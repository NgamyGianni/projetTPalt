import {createContext, useContext, useState} from 'react'
const QrcodeContex = createContext({})


export function useQrcode():any{
    return useContext(QrcodeContex)
}

function QrCodeProvider({children}:any) {
    const [visibleQRcode, setVisibleQRcode]= useState<Boolean>(false)
  return (
    <QrcodeContex.Provider value={{visibleQRcode, setVisibleQRcode}}>
        {children}
    </QrcodeContex.Provider>
  )
}

export default QrCodeProvider
