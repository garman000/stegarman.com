import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakPoints } from "@chakra-ui/theme-tools"

const overrides = {
    ...chakraTheme,
}

const customTheme = extendTheme(overrides)