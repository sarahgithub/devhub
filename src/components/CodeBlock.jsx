// src/components/CodeBlock.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ language = "java", code }) {
  return (
    <div style={{ margin: "16px 0" }}>
      <SyntaxHighlighter language={language} style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
