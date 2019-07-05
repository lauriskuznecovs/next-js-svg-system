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
  primary: 'Signika Negative, sans-serif', // titles, headers
  secondary: 'Source Sans Pro, sans-serif', // body, labels, buttons etc.
}

theme.typography = {
  h1: {
    weight: 600,
    mobile: {
      size: '2.5em', // 40px
      lineHeight: '2.875rem', // 46px
    },
    desktop: {
      size: '2.5em', // 40px
      lineHeight: '3.3333rem', // 50px
    },
  },
  h2: {
    weight: 600,
    mobile: {
      size: '2.25em', // 36px
      lineHeight: '2.5rem',
    },
    desktop: {
      size: '2.5em', // 40px
      lineHeight: '1em',
    },
  },
  h3: {
    weight: 600,
    mobile: {
      size: '1.8125em', // 29px
      lineHeight: '2.1875em', // 35px
    },
    desktop: {
      size: '1.75em', // 28px
      lineHeight: '2.125em', // 34px
    },
  },
  h4: {
    weight: 600,
    mobile: {
      size: '1.625em', // 26px
      lineHeight: '2em', // 32px
    },
    desktop: {
      size: '1.5em', // 24px
      lineHeight: '1.875em', // 30px
    },
  },
  h5: {
    weight: 600,
    mobile: {
      size: '1.4375em', // 23px
      lineHeight: '1.75em', // 28px
    },
    desktop: {
      size: '1.25em', // 20px
      lineHeight: '1.625em', // 26px
    },
  },
  mainContent: '1.125rem',
  readMoreLink: {
    weight: 600,
    size: '1.25em', // 20px
    lineHeight: '1.25em',
  },
}

export default theme
