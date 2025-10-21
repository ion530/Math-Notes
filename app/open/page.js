import Link from 'next/link';

export default function Open() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Notebook</h1>
        <p className="text-xl text-gray-600">Open Topics</p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
        <Link 
          href="/open/erdos-straus" 
          className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg shadow-sm transition-all duration-200 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Erdős–Straus Conjecture</h2>
          <p className="text-gray-600">Exploring the Diophantine equation 4/n = 1/x + 1/y + 1/z</p>
        </Link>

        {/* You can add more research topics here following the same pattern */}
        {/* <Link href="/another-topic" className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg shadow-sm transition-all duration-200 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Another Conjecture</h2>
          <p className="text-gray-600">Brief description</p>
        </Link> */}
      </div>
    </main>
  );
}