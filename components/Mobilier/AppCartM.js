import PageM from './pageM';
import CartM from './CartM';
import FormM from './FormM';
import { CartProvider} from "react-use-cart";
import { useState, useEffect } from 'react';

const  AppCartM = ({ data, updateData, Data }) =>{
  const [domLoaded, setDomLoaded] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    setDomLoaded(true);
  }, []);

    return (
      <>
        {domLoaded && (<CartProvider>
        <FormM updateData={updateData} Data={Data} setShow={setShow} />
          {show ? <PageM data={data} /> : <CartM />}
      </CartProvider>)}
      </>
  )

}

export default AppCartM;
