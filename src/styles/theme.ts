import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      "50": "#F5F8FA"
    },
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "400": "rgba(153, 153, 153, 0.5)",
      "300": "#DADADA",
      "50": "#F5F8FA"
    },
    yellow: {
      "400": "#FFBA08",
      "300": "rgba(255, 186, 8, 0.5)",

    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
})