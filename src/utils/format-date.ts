export const formatDate = (value: string): string => {
  if (!value) {
    return value
  }
  const date = value.substring(0, 10).split('-')

  return `${date[2]}.${date[1]}.${date[0]}`
}
