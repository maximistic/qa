import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
        Return Home
      </Link>
    </div>
  );
}