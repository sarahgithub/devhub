// src/components/CopyableCodeBlock.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

function CopyableCodeBlock({ code, language = "java" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ position: 'relative', marginBottom: '24px' }}>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          padding: '4px 8px',
          fontSize: '12px',
          cursor: 'pointer',
          borderRadius: '4px',
          backgroundColor: copied ? '#4caf50' : '#222',
          color: '#fff',
          border: 'none'
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <SyntaxHighlighter language={language} style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CopyableCodeBlock;
