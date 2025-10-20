export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
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
          <h2 className="text-2xl font-semibold text-black-800 mb-1">Research Notebook</h2>
          <p className="text-black-600">My work on open problems</p>
        </a>

        <a 
          href="/closed" 
          className="w-full px-6 py-4 bg-grey-50 hover:bg-grey-100 border border-grey-200 rounded-lg shadow-sm transition-all duration-200 text-center"
        >
          <h2 className="text-2xl font-semibold text-black-800 mb-1">ScrapBook</h2>
          <p className="text-black-600">Proofs of known or relatively obvious claims and undeveloped ideas</p>
        </a>

        <a
          href="/problems"
          className="w-full px-6 py-4 bg-grey-50 hover:bg-grey-100 border border-grey-200 rounded-lg shadow-sm transition-all duration-200 text-center"
        >
          <h2 className="text-2xl font-semibold text-black-800 mb-1">Problem Solving</h2>
          <p className="text-black-600">
            Solutions to competition problems (IMO Shortlist, etc.)
          </p>
        </a>
      </div>
    </main>
  );
}