import { Box, Text } from "@chakra-ui/react"

type Props = {
    color: string,
    onCopy: () => void
}

export const Pallette: React.FC<Props> = ({ color, onCopy }) => {
    return (
        <Box
            className="pallette__item"
            bg={color}
        >
            <Text
                as="button"
                onClick={onCopy}
                className="pallette__color__copy"
            >
                {color.toString()}
            </Text>
        </Box>
    )
}