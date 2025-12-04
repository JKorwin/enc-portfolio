import DocxViewer from "../components/DocxViewer";

export default function Resume() {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">
        Resume & Cover Letter
      </h1>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Below are my professional resume and a cover letter example. These
          documents showcase my ability to present qualifications, experience,
          and skills in a clear and organized format suitable for professional
          communication.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Resume</h2>
          <DocxViewer src="/Justin Korwin Resume.docx" />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Cover Letter</h2>
          <DocxViewer src="/cover letter.docx" />
        </div>
      </div>
    </article>
  );
}
