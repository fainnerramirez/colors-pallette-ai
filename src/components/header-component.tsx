import { Box, Flex, Heading } from "@chakra-ui/react"

export const HeaderComponent = () => {
    return (
        <Flex justifyContent={"center"} flexDirection={"column"} marginBottom={5}>
            <Heading bgGradient='linear(to-l, #fd1d1d, #fcb045)'
                bgClip='text'>
                Pallette Colors AI
            </Heading>
            <Box>
            Describe el estado de ánimo, el tema o el estilo de tu paleta de colores.
            </Box>
        </Flex>
    )
}