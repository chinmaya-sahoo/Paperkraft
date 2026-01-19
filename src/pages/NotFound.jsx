import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="text-7xl font-bold text-indigo-600">404</h1>
      <p className="mt-2 text-xl font-semibold text-slate-800">
        Page Not Found
      </p>
      <p className="mt-1 text-sm text-slate-500">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6 flex gap-4">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="rounded-full border border-slate-300 px-5 py-2 text-sm hover:bg-slate-100 transition"
        >
          ⬅ Go Back
        </button>

        {/* Home Button */}
        <Link
          to="/"
          className="rounded-full bg-indigo-600 px-5 py-2 text-sm text-white hover:bg-indigo-700 transition"
        >
          🏠 Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
