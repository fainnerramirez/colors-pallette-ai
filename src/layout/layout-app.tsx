import { Container } from "@chakra-ui/react"

type Props = {
    children: React.ReactNode
}

export const LayoutApp: React.FC<Props> = ({ children }) => {
    return (
        <Container maxW={"6xl"} centerContent>
            {children}
        </Container>
    )
}