export const createBodyMarkup = (body) => (
  {__html: body}
)

export const getAria = ({label}) => {
  let aria

  if (label !== undefined) {
    aria = {
      'aria-label': label,
    }
  }
  else {
    aria = {
      'aria-hidden': true,
      'role': 'presentation',
    }
  }

  return aria
}