import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakPoints } from "@chakra-ui/theme-tools"

const fonts = {
    ...chakraTheme.fonts,
}
const overrides = {
    ...chakraTheme,
    fonts,
}

const customTheme = extendTheme(overrides)

export default customeTheme;