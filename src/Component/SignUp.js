import React, {useState} from 'react';


function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:""
    });
    
    function hundleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(event){
            event.preventDefault();
            fetch("https://fly-food-1.herokuapp.com/users",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
    }
    return (
        <div>

            <section className="text-center">
                <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ backgroundColor: '#eee', opacity: 0.9 }}>
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Sign up now</h2>
                                <form onSubmit={handleSubmit}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example1" className="form-control" name="firstName" onChange={hundleChange} value={formData.firstName}/>
                                                <label className="form-label" htmlFor="form3Example1">
                                                    First name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="form3Example2" className="form-control" name="lastName" onChange={hundleChange} value={formData.lastName} />
                                                <label className="form-label" htmlFor="form3Example2">
                                                    Last name
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control" name="email" onChange={hundleChange} value={formData.email}/>
                                        <label className="form-label" htmlFor="form3Example3">
                                            Email address
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" className="form-control" name="password" onChange={hundleChange} value={formData.password}/>
                                        <label className="form-label" htmlFor="form3Example4">
                                            Password
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SignUp;