import { Button, Card, CardBody, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
  const [formInput, setFormInput] = useState({ email: '', password: '' })

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
              Login
            </Button>
          </Stack>
        </form>
      </CardBody>
    </Card>
  )
}

export default Login
