// Common imports ---
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Style imports ---
import "../../styles/ContactForm/ContactForm.css";

// Assets imports ---

const ContactForm = () => {

    const navigate = useNavigate();

    const initialState = {
        formData: {
            name: {
                value: "",
                valid: false,
                touched: false,
                errMsg: "",
                validationRules: {
                    onlyAlphabet: true
                }
            },
            email: {
                value: "",
                valid: false,
                touched: false,
                errMsg: "",
                validationRules: {
                    isEmail: true
                }
            },
            mobile: {
                value: "",
                valid: false,
                touched: false,
                errMsg: "",
                validationRules: {
                    isMobile: true
                }
            },
            message: {
                value: "",
                valid: false,
                touched: false,
                errMsg: "",
            }
        }
    }

    const [data, setData] = useState(initialState)

    const onChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        console.log(`Name from onChange function ===> ${name}, \n Value from onChange function ===> ${value}`);

        // let updatedValue = { ...data };

        // let elementName = updatedValue.formData[name];
        // elementName.touched = true;
        // elementName.errMsg = "";

        // if (data.formData.name.validationRules.onlyAlphabet) {
        //     const alphaRegex = /^[a-zA-Z]+$/;

        //     if (alphaRegex.test(value)) {
        //         elementName.value = value;
        //         elementName.valid = true;
        //         elementName.errMsg = "";
        //     } else {
        //         elementName.valid = false;
        //         elementName.errMsg = "Name field can only contain Letters of the Alphabet.";
        //     }
        // } else if (data.formData.email.validationRules.isEmail) {
        //     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //     if (emailRegex.test(value)) {
        //         elementName.value = value;
        //         elementName.valid = true;
        //         elementName.errMsg = "";
        //     } else {
        //         elementName.valid = false;
        //         elementName.errMsg = "Please enter a valid Email ID.";
        //     }
        // } else if (data.formData.mobile.validationRules.isMobile) {
        //     const mobileRgex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        //     if (mobileRgex.test(value)) {
        //         elementName.value = value;
        //         elementName.valid = true;
        //         elementName.errMsg = "";
        //     } else {
        //         elementName.valid = false;
        //         elementName.errMsg = "Please enter a valid Mobile number.";
        //     }
        // } else if (elementName === name) {
        //     elementName.value = value;
        //     elementName.valid = true;
        //     elementName.errMsg = "";
        // }


        

        // if (data.formData.name.validationRules.onlyAlphabet) {
        //     const alphaRegex = /^[a-zA-Z]+$/;

        //     if (alphaRegex.test(value)) {
        //         elementName.value = value;
        //         elementName.valid = true;
        //         elementName.errMsg = "";
        //     } else {
        //         elementName.valid = false;
        //         elementName.errMsg = "Name field can only contain Letters of the Alphabet.";
        //     }
        // }

        // if (data.formData.email.validationRules.isEmail) {
        //     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //     if (emailRegex.test(value)) {
        //         elementName.value = value;
        //         elementName.valid = true;
        //         elementName.errMsg = "";
        //     } else {
        //         elementName.valid = false;
        //         elementName.errMsg = "Please enter a valid Email ID.";
        //     }
        // }

        // if (data.formData.mobile.validationRules.isMobile) {
        //     const isNumber = /^[0-9\b]+$/;
        //     const mobileRgex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        //     if (isNumber.test(value)) {
        //         if (mobileRgex.test(value)) {
        //             elementName.value = value;
        //             elementName.valid = true;
        //             elementName.errMsg = "";
        //         } else {
        //             elementName.valid = false;
        //             elementName.errMsg = "Please enter a valid Mobile number.";
        //         }
        //     }
        //     else {
        //         // elementName.value = value;
        //         elementName.valid = false;
        //         elementName.errMsg = "Please enter your Mobile Number.";
        //     }
        // }

        // if (elementName === name) {
        //     elementName.value = value;
        //     elementName.valid = true;
        //     elementName.errMsg = "";
        // }

        // elementName.value = value;

        // updatedValue.formData[name] = elementName;

        // setData(updatedValue);
        // console.log("Data after changes ===> ", data);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("complete data on submit ===> ", data);

        navigate("/success", {
            state: {
                message: "Successful submitted"
            }
        });
    }

    return (
        <>
            <div>
                <h1>Contact form</h1>
                <form action="#" autoComplete="off">
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" value={data.formData.name.value} onChange={(e) => onChange(e)} />
                        <p>{data.formData.name.errMsg ? data.formData.name.errMsg : null}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={data.formData.email.value} onChange={(e) => onChange(e)} />
                        <p>{data.formData.email.errMsg ? data.formData.email.errMsg : null}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}>
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" name="mobile" value={data.formData.mobile.value} onChange={(e) => onChange(e)} />
                        <p>{data.formData.mobile.errMsg ? data.formData.mobile.errMsg : null}</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "25px" }}>
                        <label htmlFor="message">Message</label>
                        <textarea type="text" name="message" value={data.formData.message.value} onChange={(e) => onChange(e)} style={{ resize: "vertical" }} />
                        <p>{data.formData.message.errMsg ? data.formData.message.errMsg : null}</p>
                    </div>
                </form>
                <div>
                    <Link to="/" style={{ textDecoration: "none" }}>Back</Link>
                    <button onClick={(e) => onSubmit(e)}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default ContactForm;