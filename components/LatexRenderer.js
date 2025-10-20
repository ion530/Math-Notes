'use client';

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function LatexRenderer({ content, block = false, className = '', inline = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && content) {
      try {
        katex.render(content, containerRef.current, {
          displayMode: block && !inline,
          throwOnError: false,
          strict: false,
          macros: {
            "\\blacksquare": "\\square", // Ensure QED symbol works
            "\\qed": "\\square" // Alternative QED
          }
        });
      } catch (error) {
        console.error('KaTeX error:', error);
        containerRef.current.textContent = content;
      }
    }
  }, [content, block, inline]);

  const Element = inline ? 'span' : block ? 'div' : 'span';
  
  return <Element 
    ref={containerRef} 
    className={`${className} ${block ? 'block' : 'inline'}`}
  />;
}