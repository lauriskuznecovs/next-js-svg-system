export const isExternal = (path) => {
  const rules = new RegExp('^(?:[a-z]+:)?//', 'i')
  return rules.test(path)
}
