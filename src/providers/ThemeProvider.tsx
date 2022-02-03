import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import theme from './theme'

export default function ThemeProvider({ children }: { children: any }) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}
