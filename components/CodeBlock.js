import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function CodeBlock(props) {
  const { children, className = '', inline } = props;
  const code = children.join('').replace(/\n$/, '');
  const language = className.replace('language-', '');

  const codeInline = (
    <code>{code}</code>
  );

  const codeBlock = (
    <SyntaxHighlighter
      language={language}
      style={false}
      customStyle={{ backgroundColor: 'none' }}
      PreTag="div"
    >
      {code}
    </SyntaxHighlighter>
  );

  return (
    inline ? codeInline : codeBlock
  );
}

export default CodeBlock;
