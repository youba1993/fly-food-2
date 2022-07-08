import React from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

function RestaurantInfo({ basicModal, handletoggle, menu, name, setDataCart }) {

    const toggleShow = () => handletoggle(basicModal);                     // handle the modal 

    const cartElement = { meal: "", price: 0 }                             // a cart element 

    function handleAddButon(index) {                                       // handle the add button thats fill the cart 
        cartElement.meal = menu[index].meal;
        cartElement.price = menu[index].price;
        setDataCart(cartElement);                                          //add element to the cart

    }



    return (
        <>

            <MDBModal show={basicModal} setShow={() => basicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{name}  Menu : </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}>x</MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <ul>
                                {menu.map((item, index) =>   //map the restaurant menu array and rendre every meal and price in the modal
                                    <li key={index} >

                                        {item.meal}&emsp;
                                        {item.price}&emsp;
                                        <button onClick={() => handleAddButon(index)} className="btn btn-primary" color='light'>Add to cart</button>

                                    </li>
                                )}
                            </ul>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}
export default RestaurantInfo;