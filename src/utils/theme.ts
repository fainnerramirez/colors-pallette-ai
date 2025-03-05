import { extendTheme } from '@chakra-ui/react';
//@ts-ignore
import '@fontsource-variable/inter';

export const customTheme = extendTheme({
    fonts: {
        heading: `'Inter Variable', sans-serif`,
        body: `'Inter Variable', sans-serif`
    }
})