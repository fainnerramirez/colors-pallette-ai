import { HStack } from "@chakra-ui/react"
import { PalletteProps } from "../types";
import { PalletteOption } from "../components/pallette-option";

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

const PalletteOptionsSection: React.FC = () => {
    return (
        <HStack wrap={"wrap"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
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

export default PalletteOptionsSection;