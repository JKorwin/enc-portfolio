import Image from "next/image";

export default function Algebro() {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">
        Algebro
      </h1>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Algebro is a personal project that I founded and developed to address
          gaps in middle-school math education. It is a web-based learning
          platform that combines interactive curriculum, guided practice, and
          AI-supported teaching tools to help students learn algebra concepts
          more effectively. The platform is built with a full-stack modern web
          environment and includes features such as dynamic lessons, automated
          feedback, progress tracking, and classroom management tools for
          teachers.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          I am currently piloting Algebro in local middle schools, gathering
          real classroom feedback from students and teachers. The goal of the
          pilot is to measure the platform's impact on student performance,
          refine the curriculum, and improve the overall user experience. Early
          feedback has been positive, and I am actively working toward signing
          paid school contracts in the fall based on the pilot results.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          Alongside school partnerships, I also plan to launch parent accounts,
          which will allow families to access the platform independently and use
          Algebro as a supplemental learning tool at home. The long-term vision
          is to create a scalable and affordable math-learning solution that
          benefits both schools and individual learners.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          You can visit the platform at{" "}
          <a
            href="https://algebro.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            algebro.ai
          </a>
          . Please note that I will not provide account login details for
          security purposes, as the platform contains real student and teacher
          data from active pilot classrooms.
        </p>

        <div className="mt-12 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
              Interactive Learning
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg -mx-6 md:-mx-20 lg:-mx-40">
              <Image
                src="/learning.png"
                alt="Algebro interactive learning interface"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
              Guided Practice
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg -mx-6 md:-mx-20 lg:-mx-40">
                <Image
                  src="/practice.png"
                  alt="Algebro practice interface example 1"
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg -mx-6 md:-mx-20 lg:-mx-40">
                <Image
                  src="/practice2.png"
                  alt="Algebro practice interface example 2"
                  width={1600}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
              Progress Analytics
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg -mx-6 md:-mx-20 lg:-mx-40">
              <Image
                src="/analytics.png"
                alt="Algebro analytics and progress tracking"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
