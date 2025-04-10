export default function SkeletonLoader() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-2 animate-pulse"></div>
        <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-1 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
      </div>

      <div className="bg-gray-200 rounded-lg h-24 w-full max-w-3xl mx-auto mb-12 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-6 animate-pulse">
            <div className="flex justify-between items-start">
              <div className="h-6 bg-gray-200 rounded w-24"></div>
              <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            </div>
            <div className="mt-2 h-4 bg-gray-200 rounded w-full"></div>
            <div className="mt-1 h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
