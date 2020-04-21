import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/nord'

SyntaxHighlighter.registerLanguage('javascript', js)

export const Code = ({ language, code }) => (
  <SyntaxHighlighter language={language} style={docco}>
    {code}
  </SyntaxHighlighter>
)
