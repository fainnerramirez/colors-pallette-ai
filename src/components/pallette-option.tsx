import { Button } from "@chakra-ui/react"
import { PalletteProps } from "../types/palletteType"

export const PalletteOption: React.FC<PalletteProps> = ({ colorSheme, text }) => {
    return (
        <Button variant={"outline"} colorScheme={colorSheme}>{text}</Button>
    )
}