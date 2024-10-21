import React, { useState } from 'react'
import { Button, Card, CardBody, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

const SignUp = () => {
  const [formInput, setFormInput] = useState({ name: '', email: '', password: '', contact: '' })

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formInput);
    setFormInput({ name: '', email: '', password: '', contact: '' })
  }
  return (
    <Card>
      <CardBody>
        <form onSubmit={handleFormSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              m={'5px'}
              type='name'
              name='name'
              value={formInput.name}
              onChange={handleFormChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Contact</FormLabel>
            <Input
              m={'5px'}
              type='contact'
              name='contact'
              value={formInput.contact}
              onChange={handleFormChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              m={'5px'}
              type='email'
              name='email'
              value={formInput.email}
              onChange={handleFormChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              m={'5px'}
              type='password'
              name='password'
              value={formInput.password}
              onChange={handleFormChange}
            />
          </FormControl>
          <Stack>
            <Button type='submit' m={'5px'} colorScheme='teal'>
              SignUp
            </Button>
          </Stack>
        </form>
      </CardBody>
    </Card>
  )
}

export default SignUp
