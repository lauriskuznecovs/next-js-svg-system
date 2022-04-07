export const isExternal = (path) => {
  const rules = /[a-zA-Z0-9]*:\/\/[^\s]*/g
  return path.match(rules) != null
}
