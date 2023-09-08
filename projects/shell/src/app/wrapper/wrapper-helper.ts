export function extractFragment(resp: string, tagName: string, key = '', value = '') {
  const startTag = (key && value) ? `<${tagName} ${key}="${value}"` : `<${tagName}`;
  const start = resp.indexOf(startTag);
  const end = resp.indexOf('</' + tagName + '>', start);

  if (start === -1 || end === -1) {
    return '';
  }

  let html = resp.substring(start, end + tagName.length + 3);
  return html;
}
