import SearchPalletteSection from "../components/search-pallette-section"
import HeaderSection from "../sections/header-section"
import PalletteOptionsSection from "../sections/pallette-option-section"
import PalletteSection from "../sections/pallette-section"

export const HomePage = () => {
    return (
        <>
            <HeaderSection />
            <PalletteOptionsSection />
            <SearchPalletteSection />
            <PalletteSection />
        </>
    )
}