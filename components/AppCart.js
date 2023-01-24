import Page from './Page';
import Cart from './cart';
import FormH from './Formh';
import { CartProvider} from "react-use-cart";
import { useState, useEffect } from 'react';

const  App = ({ data, updateData, Data }) =>{ 
  
  const [hasMounted, setHasMounted] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setHasMounted(true);

  }, []);

  if (!hasMounted) {
    return null;
  }
    return (
      <CartProvider>
        <FormH updateData={updateData} Data={Data} setShow={setShow} />
          {show ? <Page data={data} /> : <Cart />}
      </CartProvider>
  )

}

export default App;
