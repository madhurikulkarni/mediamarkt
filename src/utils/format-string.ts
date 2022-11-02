export const decodeURIString = (searchParams: string) => {
  return searchParams
    .replaceAll('%3A', ':')
    .replaceAll('+', ' ')
    .replaceAll('%2F', '/')
    .replace('=', '')
}
