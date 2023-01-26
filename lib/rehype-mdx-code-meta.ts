import { visit } from 'unist-util-visit'

/** @type {import('unified').Plugin<Array<void>, import('hast').Root>} */
export function rehypeMeta() {
  const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g
  return tree => {
    visit(tree, 'element', (node, _, parent) => {
      let match

      if (node.tagName === 'code' && node.data && node.data.meta) {
        re.lastIndex = 0 // Reset regex.

        while ((match = re.exec(node.data.meta))) {
          node.properties[match[1]] = match[2] || match[3] || match[4] || ''
          parent.properties[match[1]] = match[2] || match[3] || match[4] || ''
        }
      }
    })
  }
}
