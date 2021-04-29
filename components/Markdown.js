import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock.js';

function Markdown({ children }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          code: CodeBlock,
        }}
      >
        { children }
      </ReactMarkdown>
    </div>
  );
}

export default Markdown;
