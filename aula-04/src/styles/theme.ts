import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            '900':'#181b23',
            '800':'#1f2829',
            '700':'#353656',
            '600':'#4b4d63',
            '500':'#616488',
            '400':'#797D9A',
            '300':'#969980',
            '200':'#B3B5C6',
            '100':'#D1D2DC',
            '50': '#EEEEF2',
        }
    },
    fonts:{
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})