import React, {useEffect, useState} from 'react';


function SignIn() {
    const [users, setUsers] = useState();
    const [formDataIn, setFormDataIn] = useState({
        email: "",
        password:""
    });
    function hundleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormDataIn({
            ...formDataIn,
            [name]: value,
        });
    }

    
     useEffect(()=>{
        fetch("https://fly-food-1.herokuapp.com/users")
           .then((resp)=>resp.json())
           .then((user)=> setUsers(user))
    },[]);


    function handleSubmit(event){
        event.preventDefault();
        const auth = users.find((user)=> user.email === formDataIn.email && user.password === formDataIn.password)
        if (auth) alert("Welcome")
        else alert("Somthing wrong")
    }

    return (
        <div>

            <section className="card mx-4 mx-md-5 shadow-5-strong" style={{ backgroundColor: '#eee', opacity: 0.9 }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <h2 className="fw-bold mb-5">Please login to your account</h2>
                                            <form onSubmit={handleSubmit}>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        placeholder="Email address"
                                                        name="email" onChange={hundleChange} value={formDataIn.email} />  
                                                    <label className="form-label" htmlFor="form2Example11">
                                                        Username
                                                    </label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example22" className="form-control"
                                                        name="password" onChange={hundleChange} value={formDataIn.password} /> 
                                                    <label className="form-label" htmlFor="form2Example22">
                                                        Password
                                                    </label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log In</button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button" className="btn btn-outline-danger">Create new</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">The Best of US Restaurants at your Fingertips,
                                                choose a wide Variety of Meals for all your Tastes and what suits your Mood.
                                                Make Time to Enjoy a Healthy Meal... choose the Authentic Taste,
                                                choose Love.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SignIn;