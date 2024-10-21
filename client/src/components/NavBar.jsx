import React from 'react'
import { Flex, Heading, Box, ButtonGroup, Button, Spacer, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();

    const handleAuth = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <Flex minWidth='max-content' maxWidth={'100%'} alignItems='center' gap='2' opacity={0.8} padding={"0.5rem"} backgroundColor={'blackAlpha.900'} >
            <Box p='2'>
                <Heading size='md' textColor={'teal'}>NotePad App</Heading>
            </Box>
            <Flex p='2' gap="2">
                <Text size="sm" textColor={'white'}>Home |</Text>
                <Text size="sm" textColor={'white'}>Contact |</Text>
                <Text size="sm" textColor={'white'}>About </Text>
            </Flex>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button onClick={handleAuth} colorScheme='teal'>Sign Up</Button>
                <Button onClick={handleAuth} colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default NavBar
