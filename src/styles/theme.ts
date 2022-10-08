import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      "50": "#F5F8FA"
    },
    gray: {
      "700": "#47585B"
    },
    yellow: {
      "700": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'white-50',
        color: 'gray.700'
      }
    }
  }
})