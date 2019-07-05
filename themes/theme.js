import colors from './colors'

const theme = {}
theme.palette = {
  primary: colors.purple,
  secondary: colors.black,
  third: colors.blackAlpha70,
  white: colors.white,

  link: {
    active: colors.purple,
    hover: colors.black,
    visited: colors.darkBlue,
  },
  background: {
    app: colors.silver,
    page: colors.silverLight,
    content: colors.white,
  },
}

theme.fonts = {
  primary: 'sans-serif',
}

theme.typography = {}

export default theme
