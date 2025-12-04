"use client";

import { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";

interface DocxViewerProps {
  src: string;
}

export default function DocxViewer({ src }: DocxViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocument = async () => {
      if (!containerRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to fetch document: ${response.statusText}`);
        }

        const blob = await response.blob();

        await renderAsync(blob, containerRef.current, undefined, {
          className: "docx-viewer",
          inWrapper: true,
          ignoreWidth: true,
          ignoreHeight: true,
          ignoreFonts: false,
          breakPages: false,
          ignoreLastRenderedPageBreak: true,
          experimental: false,
          trimXmlDeclaration: true,
          useBase64URL: true,
          renderHeaders: false,
          renderFooters: false,
          renderFootnotes: true,
          renderEndnotes: true,
        });

        // Remove any header/footer elements after rendering
        if (containerRef.current) {
          const headers = containerRef.current.querySelectorAll('header');
          const footers = containerRef.current.querySelectorAll('footer');
          headers.forEach(el => el.remove());
          footers.forEach(el => el.remove());
        }

        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load document");
        setIsLoading(false);
      }
    };

    loadDocument();
  }, [src]);

  return (
    <div className="docx-container">
      {isLoading && (
        <div className="text-center py-8 text-slate-600">
          Loading document...
        </div>
      )}
      {error && (
        <div className="text-center py-8 text-red-600">
          Error: {error}
        </div>
      )}
      <div
        ref={containerRef}
        className={isLoading ? "hidden" : ""}
      />
      <style jsx global>{`
        .docx-container {
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }
        .docx-viewer {
          padding: 0;
        }
        .docx-wrapper {
          background: white !important;
          padding: 0 !important;
        }
        .docx-wrapper > section.docx {
          box-shadow: none !important;
          margin-bottom: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: auto !important;
        }
        .docx-wrapper > section.docx > article {
          margin: 0 !important;
          padding: 1rem !important;
        }
        .docx-container span,
        .docx-container p,
        .docx-container div,
        .docx-container td,
        .docx-container li {
          font-size: 14px !important;
          line-height: 1.6 !important;
        }
        .docx-container h1,
        .docx-container h2,
        .docx-container h3,
        .docx-container h4,
        .docx-container h5,
        .docx-container h6 {
          font-size: 18px !important;
          line-height: 1.4 !important;
        }
        .docx-wrapper header,
        .docx-wrapper footer,
        .docx > header,
        .docx > footer,
        section.docx > header,
        section.docx > footer,
        .docx-wrapper > section > header,
        .docx-wrapper > section > footer,
        .docx-wrapper [class*="header"],
        .docx-wrapper [class*="footer"],
        .docx-container > div > div > header,
        .docx-container > div > div > footer,
        .docx-container header,
        .docx-container footer {
          display: none !important;
          height: 0 !important;
          min-height: 0 !important;
          max-height: 0 !important;
          overflow: hidden !important;
          visibility: hidden !important;
        }
        .docx-wrapper > section.docx > header,
        .docx-wrapper > section.docx > footer {
          display: none !important;
        }
        .docx-wrapper p {
          color: #334155 !important;
          font-size: 1.125rem !important;
          line-height: 1.75 !important;
        }
        .docx-wrapper h1,
        .docx-wrapper h2,
        .docx-wrapper h3,
        .docx-wrapper h4,
        .docx-wrapper h5,
        .docx-wrapper h6 {
          color: #1d4ed8 !important;
        }
        .docx-wrapper table {
          border-collapse: collapse;
          width: 100%;
        }
        .docx-wrapper td,
        .docx-wrapper th {
          border: 1px solid #e2e8f0;
          padding: 0.5rem;
        }
        .docx-wrapper img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}

