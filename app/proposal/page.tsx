import DocxViewer from "../components/DocxViewer";

export default function Proposal() {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">
        Proposal Assignment
      </h1>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          This document presents a formal project proposal. It demonstrates the
          ability to structure and communicate ideas effectively, outlining
          objectives, methods, and expected outcomes in a professional format.
        </p>

        <div className="mt-8">
          <DocxViewer src="/Project Proposal.docx" />
        </div>
      </div>
    </article>
  );
}
