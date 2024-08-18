import { Box, Text, Flex, Input, Button } from "@chakra-ui/react"
import { colors } from "../Config/Colors"
import { LogoCircle } from "../Components/LogoCircle"

export function Login() {
    return (
        <>
            <Flex bg={colors.background} height='100vh' justifyContent='center' alignItems='center' gap='20px' flexWrap='wrap' flexDirection={["column", "row"]}>
                <LogoCircle />
                <Box border='2px' borderColor={colors.acento} p='20px' borderRadius='8px'>
                    <Text textAlign='center'>Sing In</Text>
                    <Flex flexDirection='column' gap='20px' mt='20px' mb='20px'>
                        <Input placeholder="Email" type="mail" required />
                        <Input placeholder="Password" type="password" required />
                        <Button width='30%' margin='auto'>Login</Button>
                    </Flex>
                    <Flex justifyContent='space-around'>
                        <Text as='a' href="#" textDecoration='underline'>Forgot Password?</Text>
                        <Text as='a' href="/register" textDecoration='underline'>Register</Text>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}