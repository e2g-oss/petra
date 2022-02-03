import { CSSProperties } from 'react'
import { createTheme, PaletteOptions, responsiveFontSizes, SimplePaletteColorOptions } from '@mui/material/styles'

import { brandColors } from '../tokens/colors'

const primary: SimplePaletteColorOptions = {
  main: brandColors.blue.hex(),
  light: brandColors.lightBlue.hex(),
}

const secondary: SimplePaletteColorOptions = {
  main: brandColors.green.hex(),
  light: brandColors.lightGreen.hex(),
}

const success: SimplePaletteColorOptions = {
  main: brandColors.lightGreen.hex(),
  dark: brandColors.green.hex(),
}

const warning: SimplePaletteColorOptions = {
  main: brandColors.lightRust.hex(),
  dark: brandColors.rust.hex(),
}

const info: SimplePaletteColorOptions = {
  main: brandColors.lightBlue.hex(),
  dark: brandColors.blue.hex(),
}

const text: PaletteOptions['text'] = {
  primary: brandColors.darkGrey.hex(),
}

const background: PaletteOptions['background'] = {
  default: '#ffffff',
}

const headerFont = { fontFamily: 'Teko, Helvetica, Arial, sans-serif' }

declare module '@mui/material/styles' {
  interface TypographyVariants {
    mono: CSSProperties;
  }

  interface TypographyVariantsOptions {
    mono?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    mono: true;
  }
}

const theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: ['Proxima Nova, Calibri, sans-serif'].join(','),
    h1: {
      ...headerFont,
      fontSize: '4rem',
    },
    h2: {
      ...headerFont,
      fontSize: '3.15rem',
    },
    h3: {
      ...headerFont,
      fontSize: '2.85rem',
    },
    h4: {
      ...headerFont,
      fontSize: '2rem',
    },
    h5: {
      ...headerFont,
      fontSize: '1.75rem',
    },
    h6: headerFont,
    mono: {
      fontFamily: '\'Roboto Mono\', monospace',
    },
  },
  palette: {
    primary,
    secondary,
    text,
    background,
    success,
    warning,
    info,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: brandColors.lightGrey.hex(),
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthSm: {
          maxWidth: '75%',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        colorSecondary: {
          checked: {
            color: brandColors.green.hex(),
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          height: '1rem',
          padding: '.25rem',
        },
        colorSecondary: {
          checked: {
            color: brandColors.green.hex(),
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(224,224,224)',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        inset: {
          '&:first-of-type': {
            paddingLeft: '1rem',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1rem',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
}))

export default theme
