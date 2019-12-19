export default function convertHttp (link) {
  return link.startsWith('http://books.google.com') ? link.replace('http://', 'https://') : link
}