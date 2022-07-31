import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm} from 'react-hook-form';
import '../login/Login.css';


export default function Login() {
    const {register , handleSubmit ,formState:{errors} } = useForm({mode: "onBlur"});

    const onSubmit = (data)=>{
        console.log("data ",data)
    }

    console.log(errors)
    return ( <>
      <h3 className='text-center my-5'>Login Form ...</h3>
      <Form onSubmit={handleSubmit(onSubmit)} className='container mt-5 w-50 p-5 border' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email :</Form.Label>
          <Form.Control style={{boxShadow: "none"}} type="text" name='email' placeholder="Enter email"
           {...register('email',{ required:true, 
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}/>
  
        {
        (errors.email && errors.email.type ) === 'required'
        && 
        <p className='text-danger'>user email is required .!</p>
         }
          {
        (errors.email && errors.email.type ) === 'pattern'
        && 
        <p className='text-danger'>please enter a valid pattern .!</p>
         }
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password :</Form.Label>
          <Form.Control style={{boxShadow: "none"}} type="password" name='password'
           placeholder="Password" {...register('password',{ required:true ,
            pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/ })} />
        {
        (errors.password && errors.password.type ) === 'required'
        && 
        <p className='text-danger'>user password is required .!</p>
         }
          {
        (errors.password && errors.password.type ) === 'pattern'
        && 
        <p className='text-danger'>please enter a valid pattern .!</p>
         }
        </Form.Group> 
        <Button variant="primary" type="submit" className='mt-4 d-block mx-auto' style={{ boxShadow:"none", backgroundColor: "#08A045", border: "#628B48" }}>
        Login
        </Button>
        <p style={{color:"#818181"}} className='my-2'>Don't have an account? <a href="">Register</a></p>
      </Form>
    </>
      
    );
}


