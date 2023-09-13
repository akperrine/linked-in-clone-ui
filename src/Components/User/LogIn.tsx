import { Button, Form, Label, TextInput } from '@trussworks/react-uswds'
import React from 'react'

function LogIn() {
    const handleLogin = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log("submitted");
    }
    return (
        <div data-testid = "login-component">
            <Form onSubmit={handleLogin}>
                <Label htmlFor='email'>Email:</Label>
                <TextInput
                    id='email'
                    name='email'
                    type='email'
                />
                <Label htmlFor='password'>Password:</Label>
                <TextInput
                    id='password'
                    name='password'
                    type='password'
                />
                <Button type='submit'>Login!</Button>
            </Form>
        </div>
    )
}

export default LogIn