import React from 'react'
import { Flex, Heading, Box, ButtonGroup, Button,Spacer } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Flex minWidth='max-content' maxWidth={'100%'} alignItems='center' gap='2' backgroundColor={'blue.600'}>
            <Box p='2'>
                <Heading size='md'>Chakra App</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default NavBar
