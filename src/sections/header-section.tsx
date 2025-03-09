import { Box, Flex, Heading } from "@chakra-ui/react"

const HeaderSection = () => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"} flexDirection={"column"} marginBottom={5} width={"100%"}>
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

export default HeaderSection;