import { Box, Button, Input } from "@chakra-ui/react"
import { BsStars } from "react-icons/bs";

const SearchPalletteSection = () => {
    return (
        <Box mt="10" display={"flex"} gap="2" width={"100%"}>
            <Input 
                placeholder="Ej. para una startup de tecnología o un domingo en la playa" 
                variant={"outline"} 
                size={"lg"}
                />
            <Button 
                leftIcon={<BsStars />} 
                bgGradient='linear(to-l, #7928CA, #FF0080)' 
                size={"lg"}
                color={"#ffffff"}
                _hover={{
                    background: "linear(to-r, #7928CA, #FF0080)"
                }}
                >Generar</Button>
        </Box>
    )
}

export default SearchPalletteSection;