// link: https://math-notes-oamw990t8-ion530s-projects.vercel.app/
// run locally: npm run dev
// git push: git add . && git commit -m "your message" && git push origin main

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 max-w-6xl w-full">
          {/* middle section */}
          <div className="flex-1">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-2">Math Notes</h1>
              <p className="text-xl text-gray-600">A collection of personal mathematical notes and ideas.</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
              <a 
                href="/open" 
                className="w-full px-6 py-4 bg-grey-50 hover:bg-grey-100 border border-grey-200 rounded-lg shadow-sm transition-all duration-200 text-center"
              >
                <h2 className="text-2xl font-semibold text-black-800 mb-1">Notebook</h2>
                <p className="text-black-600">Open topics</p>
              </a>

              <a 
                href="/closed" 
                className="w-full px-6 py-4 bg-grey-50 hover:bg-grey-100 border border-grey-200 rounded-lg shadow-sm transition-all duration-200 text-center"
              >
                <h2 className="text-2xl font-semibold text-black-800 mb-1">Scrapbook</h2>
                <p className="text-black-600">Closed topics</p>
              </a>

              <a
                href="/problems"
                className="w-full px-6 py-4 bg-grey-50 hover:bg-grey-100 border border-grey-200 rounded-lg shadow-sm transition-all duration-200 text-center"
              >
                <h2 className="text-2xl font-semibold text-black-800 mb-1">Problem Solving</h2>
                <p className="text-black-600">
                  Competition problems (IMO Shortlist, etc.)
                </p>
              </a>
            </div>
          </div>

          {/* Photo Section*/}
          <div className="w-70 border rounded-2xl p-5 shadow-sm bg-grey-50 mt-15">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/me.jpg"
                width={120}
                height={140}
                className="rounded-full mb-4"
                alt="Ion M. Evangelou"
              />
              <h2 className="font-semibold text-lg">Ion M. Evangelou</h2>
              <p className="text-gray-500 text-sm mb-2">ECE @ NTUA</p>
              <p className="text-gray-600 text-sm">el22132@mail.ntua.gr</p>

              <a
                href="https://github.com/ion530"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 text-sm hover:underline"
              >
                GitHub → ion530
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}