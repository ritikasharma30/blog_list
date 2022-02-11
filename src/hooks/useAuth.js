import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDetails } from "../components/common/fake-db/loginDetails"
const useAuth = () => {
    const history = useNavigate();
    const [showPassowrd, setShowPassword] = useState(false);
    const [userDetail, setUserDetail] = useState({
        email: '',
        password: '',
        validate: {
            emailState: '',
            passwordState: ''
        },
        confirmPassoword: '',
        firstName: '',
        lastName: ''
    })
    useEffect(() => {
        localStorage.removeItem('isAuthenticated')
    },[])
    const validateEmail = (e) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = userDetail;
        if (emailRegex.test(e.target.value)) {
            validate.emailState = 'has-success';
        } else {
            validate.emailState = 'has-danger';
        }
        setUserDetail({ validate: validate });
    }
    const validatePassword = (e) => {
        const { validate } = userDetail;
        if (e.target.value.length > 7) {
            validate.passwordState = 'has-success';
        }
        else {
            validate.passwordState = 'has-danger';
        }
        setUserDetail({ validate: validate });

    }
    const validateConfirmPassword = (e) => {
        const { validate, password } = userDetail;
        if (e.target.value === password) {
            validate.passwordState = 'has-success';
        }
        else {
            validate.passwordState = 'has-danger';
        }
        let obj = {
            ...userDetail,
            validate
        }
        setUserDetail({ ...obj });
    }

    const handleChange = (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        setUserDetail(
            {
                ...userDetail,
                [name]: value,
            });
    }

    const handleSubmitLogin = () => {
        if (userDetail.email === loginDetails.email && userDetail.password === loginDetails.password) {
            localStorage.setItem("isAuthenticated", "true");
            history('/dashboard')
        } else {
            alert('Incorrect Email or password')
        }
    }
    const handleSubmitRegister = () => {
        if (userDetail.email && userDetail.firstName && userDetail.password) {
            if (userDetail.password === userDetail.confirmPassoword) {
                localStorage.setItem("isAuthenticated", "true");
                history('/dashboard')
            } else {
                alert('Incorrect Email or password')
            }
        }
        else {
            alert('please fill the required details')
        }

    }
    const handleShowPassword = (e) => {
        setShowPassword(showPassowrd ? false : true)
    }

    return {
        validateEmail,
        handleChange,
        validatePassword,
        handleShowPassword,
        setUserDetail,
        handleSubmitLogin,
        userDetail,
        showPassowrd,
        setShowPassword,
        validateConfirmPassword,
        handleSubmitRegister
    }
}
export default useAuth