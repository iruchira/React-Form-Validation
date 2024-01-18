import React, { useState } from 'react';
import toast from 'react-hot-toast';


function Form() {
    
        //first create the new date object//
        let currentDate = new Date().toLocaleDateString();
        let calenderDate= currentDate.slice(0,10);

    
    const [form, setForm] = useState({
        fisrstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        mobileNo: "",
        dob: calenderDate
    })

    const [error, setError] = useState({
        firstnameError: false,
        emailError: false,
        passwordError: false,
        confirmpasswordError: false,
        mobilenoError: false,
        submitError: false
    })
    const [sucess,setSucess]= useState(null);

    // function Sucess(){
    //     return(<>
    //     <h2 className='sucess-massage'>Submitted Sucessfully</h2>
    //     </>)
    // }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    const numregex = /^[0-9]{10}$/
    
    return (
        <div>
            <div id='heading'> Registration Form</div>
            <div className='form-content'>
                <div className='fields' >
                    <label><span>*</span>Firstname</label>
                    {/* <span>First Name:</span> */}
                    <input type='text' value={form.fisrstname} onChange={(e) => {
                        form.fisrstname = e.target.value
                        if (form.fisrstname.length < 3) {
                            setError({
                                ...error,
                                firstnameError: true
                            })
                        } else {
                            setError({
                                ...error,
                                firstnameError: false
                            })
                        }
                        setForm({
                            ...form,
                            fisrstname: e.target.value
                        })
                    }}></input>
                    {error.firstnameError ? <span style={{ color: 'red', fontSize: '12px' }}>Atleast 3 characters required</span> : ""}
                </div>
                <div className='fields'>
                <label>Lastname</label>
                    <input type='text' value={form.lastname} onChange={(e) => {
                        setForm({
                            ...form,
                            lastname: e.target.value
                        })
                    }}></input>
                </div>
                <div className='fields'>
                <label><span>*</span>Email Address</label>
                    <input type='email' value={form.email} onChange={(e) => {
                        form.email = e.target.value
                        if (!form.email.match(emailRegex)) {
                            setError({
                                ...error,
                                emailError: true
                            })
                        } else {
                            setError({
                                ...error,
                                emailError: false
                            })
                        }
                    }}></input>
                    {error.emailError ? <span style={{ color: 'red', fontSize: '12px' }}>Invalid Email Address</span> : ""}
                </div>
                <div className='fields'>
                <label><span>*</span>Password</label>
                    <input type='Password' value={form.password} onChange={e => {
                        form.password = e.target.value;
                        if (!form.password.match(passRegex)) {
                            setError({
                                ...error,
                                passwordError: true
                            })
                        } else {
                            setError({
                                ...error,
                                passwordError: false
                            })
                        }
                    }}></input>
                    {error.passwordError ? <span style={{ color: 'red', fontSize: '12px' }}>Password must be atleast 6 to 10 characters long,contains atleast one Uppercase,lowercase,number,and special character</span> : " "}
                </div>
                <div className='fields'>
                <label><span>*</span>Confirm Password</label>
                    <input type='Password' value={form.confirmpassword} onChange={(e) => {
                        form.confirmpassword = e.target.value
                        if (!form.confirmpassword.match(form.password)) {
                            setError({
                                ...error,
                                confirmpasswordError: true
                            })
                        } else {
                            setError({
                                ...error,
                                confirmpasswordError: false
                            })
                        }
                    }}></input>
                    {error.confirmpasswordError ? <span style={{ color: 'red', fontSize: '12px' }}>Please make sure your passwords match</span> : ""}
                </div>
                <div className='fields'>
                <label><span>*</span>Mobile No</label>
                    <input type='text' value={form.mobileNo} onChange={e => {
                        form.mobileNo = e.target.value
                        if (!form.mobileNo.match(numregex)) {
                            setError({
                                ...error,
                                mobilenoError: true
                            })
                        } else {
                            setError({
                                ...error,
                                mobilenoError: false
                            })
                        }
                    }}></input>
                    {error.mobilenoError ? <span style={{ color: 'red', fontSize: '12px' }}>Invalid Number</span> : ""}
                </div>
                <div className='fields'>
                <label>Date of Birth</label>
                    <input type='Date' value={form.dob} onChange={e => {
                        setForm({
                            ...form,
                            dob: e.target.value
                        })
                    }}></input>
                </div>
            </div>
            <button className='btn-submit' onClick={(e) => {
                console.log(form)
                if (form.fisrstname.trim().length === 0 || form.email.trim().length === 0 || form.password.trim().length === 0 || (form.confirmpassword !== form.password) || form.mobileNo.trim().length === 0) {
                    setError({
                        ...error,
                        submitError: true
                    })
                setSucess(false);
                toast.error("Please fill out all the fields");
                
                } else {
                    setError({
                        ...error,
                        submitError: false
                    })
                    setForm({
                        fisrstname: "",
                        lastname: "",
                        email: "",
                        password: "",
                        confirmpassword: "",
                        mobileNo: "",
                        dob: "1940-01-01"
                    })
                setSucess(true);
                toast.success("Submitted Sucessfully")
                }
            }}>CREATE ACCOUNT</button>
            <div>
            </div>
        </div>
    )
}
export default Form;
