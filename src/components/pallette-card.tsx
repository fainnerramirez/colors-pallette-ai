import { Card } from "@chakra-ui/react"
import { Pallette } from "./pallette"
import { colorProps } from "../types/colorType"
import "../styles/pallette.css";

type Props = {
    data: Array<colorProps>
}

export const PalletteCard: React.FC<Props> = ({ data }) => {
    return (
        <Card className="pallette">
            {
                data.map((color) => {
                    return (
                        <Pallette color={color.color} onCopy={() => color.onCopy} />
                    )
                })
            }
        </Card>
    )
}