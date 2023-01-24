import Page from './Page';
import Cart from './cart';
import FormH from './Formh';
import { CartProvider} from "react-use-cart";
import { useState, useEffect } from 'react';

const  App = ({ data, updateData, Data }) =>{ 
  const [domLoaded, setDomLoaded] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setDomLoaded(true); 
  }, []);

    return (
      <>
      {domLoaded && (<CartProvider>
        <FormH updateData={updateData} Data={Data} setShow={setShow} />
          {show ? <Page data={data} /> : <Cart />}
      </CartProvider>)}
      </>
  )

}

export default App;
