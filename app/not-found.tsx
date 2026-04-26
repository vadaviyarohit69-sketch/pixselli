export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-bold shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Go to homepage
          </a>
        </div>
      </div>
    </main>
  );
}
