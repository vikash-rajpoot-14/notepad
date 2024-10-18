import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import { Tabs, Text, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function LandingPage() {
    return (
        <Container maxW="xl" centerContent >
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text fontSize="3xl" fontFamily="Work sans">
                    Note Pad
                </Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs isFitted variant="soft-rounded" colorScheme='green'>
                    <TabList mb="1em">
                        <Tab>Login</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default LandingPage
