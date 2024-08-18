import { Circle, Image } from "@chakra-ui/react";
import { colors } from "../Config/Colors";

export function LogoCircle() {
    return (
        <>
            <Circle bg={colors.acento} size='250px'>
                <Image src='#' />
            </Circle>
        </>
    )
}