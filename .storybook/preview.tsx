import ThemeProvider from '../src/providers/ThemeProvider'

export const parameters = {
  actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  },
]
