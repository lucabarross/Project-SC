import { Box, Text, Flex, Input, Button } from "@chakra-ui/react"
import { colors } from "../Config/Colors"
import { LogoCircle } from "../Components/LogoCircle"

export function Register() {
    return (
        <>
            <Flex bg={colors.background} height='100vh' justifyContent='center' alignItems='center' gap='20px'>
                <Box border='2px' borderColor={colors.acento} p='20px' borderRadius='8px'>
                    <Text textAlign='center'>Register</Text>
                    <Flex flexDirection='column' gap='20px' mt='20px' mb='20px'>
                        <Input placeholder="Email" type="mail" required />
                        <Input placeholder="Password" type="password" required />
                        <Input placeholder="Repeat Password" type="password" required />
                        <Button width='30%' margin='auto'>Register</Button>
                    </Flex>
                    <Text as='a' href="/login" textDecoration='underline'>Already have an account? Login</Text>
                </Box>
                <LogoCircle />
            </Flex>
        </>
    )
}