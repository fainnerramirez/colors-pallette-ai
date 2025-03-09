import { Box, Stack } from "@chakra-ui/react";
import { PalletteCard } from "../components/pallette-card";
import { colorProps } from "../types/colorType";

const onCopyClipboard = (color: string): void => {
    navigator.
        clipboard.
        writeText(color)
        .then(() => {
            console.log("Color copiado!");
        })
        .catch(error => {
            console.log("Error al copiar el color: ", error);
        })
}

const data: Array<colorProps> = [
    {
        color: "#D76C82",
        onCopy: () => onCopyClipboard("#D76C82")
    },
    {
        color: "#EBE8DB",
        onCopy: () => onCopyClipboard("#EBE8DB")
    },
    {
        color: "#205781",
        onCopy: () => onCopyClipboard("#205781")
    }
]

const PalletteSection = () => {
    return (
        <Box className="pallette__container">
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
            <PalletteCard data={data} />
        </Box>
    )
}

export default PalletteSection;