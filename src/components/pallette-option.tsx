import { Button } from "@chakra-ui/react"

export type PalletteProps = {
    colorSheme: string,
    text: string,
}

export const PalletteOption: React.FC<PalletteProps> = ({ colorSheme, text }) => {
    return (
        <Button variant={"outline"} colorScheme={colorSheme}>{text}</Button>
    )
}