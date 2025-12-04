export default function Home() {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-8 text-blue-700 text-center">
        About Me
      </h1>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Hi, I'm Justin Korwin, a Computer Science student at the University of
          Central Florida with a strong interest in full-stack web development,
          software engineering, and education-focused technology. My coursework
          includes programming fundamentals, object-oriented development,
          database systems, and web technologies. These courses directly support
          the technical skills I use in my projects.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          I currently work at Jimmy John's, where I have gained valuable
          experience in time management, customer service, consistency, and
          performing well in fast-paced environments. Balancing full-time work,
          school, and independent development projects has strengthened my
          discipline and ability to manage multiple priorities.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed">
          I am also the founder and developer of Algebro, a middle-school math
          learning platform with AI integration for teaching purposes and
          currently being piloted in local classrooms. Through Algebro, I have
          gained experience in product design, backend and frontend development,
          database design, UX, and building tools that address real educational
          challenges for students and teachers.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">
            Skills and Tools
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800">Languages</h3>
              <p className="text-lg text-slate-700">
                JavaScript, TypeScript, Python, SQL, C
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Frameworks and Libraries
              </h3>
              <p className="text-lg text-slate-700">
                React, Next.js, Tailwind CSS
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Tools and Platforms
              </h3>
              <p className="text-lg text-slate-700">
                Supabase, Clerk, Git, GitHub, Vercel
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Other Skills</h3>
              <p className="text-lg text-slate-700">
                Technical writing, prompt engineering, curriculum structuring,
                user experience design
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Soft Skills</h3>
              <p className="text-lg text-slate-700">
                Time management, teamwork, problem-solving, adaptability,
                customer service
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed mt-8">
          I enjoy creating meaningful applications, designing smooth user
          experiences, and using technology to make learning more effective and
          engaging. My long-term goal is to work in software development and
          educational technology while continuing to build tools that help
          students succeed.
        </p>
      </div>
    </article>
  );
}
