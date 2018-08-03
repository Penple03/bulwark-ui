// TODO: Rename / refactor this.

export function pick (object, keys) {
  return Object.entries(object)
    .filter(([key]) => keys.includes(key))
    .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {})
}
