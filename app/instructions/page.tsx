import DocxViewer from "../components/DocxViewer";

export default function Instructions() {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">
        Instructions Assignment
      </h1>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          This document provides step-by-step instructions for making sandwiches
          at Jimmy John's. The guide covers preparation techniques, ingredient
          placement, and quality standards to ensure consistent and delicious
          results. This assignment demonstrates how to clearly explain procedures
          using a combination of text and images to make complex tasks easy to
          follow.
        </p>

        <div className="mt-8">
          <DocxViewer src="/JJ Sandwich making Instructions.docx" />
        </div>
      </div>
    </article>
  );
}
