import { HStack } from "@chakra-ui/react"
import { PalletteOption, PalletteProps } from "./pallette-option"

const Options: Array<PalletteProps> = [
    {
        colorSheme: "blue",
        text: "Pastel"
    },
    {
        colorSheme: "blue",
        text: "Retro"
    },
    {
        colorSheme: "blue",
        text: "Neon"
    },
    {
        colorSheme: "blue",
        text: "Goal"
    },
    {
        colorSheme: "blue",
        text: "Ligth"
    },
    {
        colorSheme: "blue",
        text: "Dark"
    },
    {
        colorSheme: "blue",
        text: "Winter"
    },
    {
        colorSheme: "blue",
        text: "Nature"
    }
]

export const Pallettes: React.FC = () => {
    return (
        <HStack wrap={"wrap"}>
            {
                Options.map((color, index) => {
                    return (
                        <PalletteOption key={index} colorSheme={color.colorSheme} text={color.text} />
                    )
                })
            }
        </HStack>
    )
}