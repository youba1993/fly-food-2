import React from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

function Cart({cartOn, toggleCart, dataCart}) {
    let total = 0;
  
    return (
        <>
                         
                <MDBModal show={cartOn} setShow={()=>cartOn} tabIndex='-1'>
                    <MDBModalDialog>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Cart :</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleCart}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <ul>
                                {dataCart.map((elem, index)=>{
                                    total = total + elem.price;
                                  return   <li key={index}>
                                        {elem.meal}&emsp;
                                        $ {elem.price}
                                        </li>}
                                )}
                                </ul>
                            </MDBModalBody>

                            <MDBModalFooter>
                                <h3>Total : $ {total} </h3>
                                <MDBBtn color='secondary' onClick={toggleCart}>
                                    Close
                                </MDBBtn>
                                <MDBBtn onClick={()=>alert("Checkout ... Thank You")}>Checkout</MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            
            
        </>
    )
}
export default Cart;