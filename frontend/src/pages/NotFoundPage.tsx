import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">404</h1>
      <Link className="text-sm text-blue-600 hover:underline" to="/">
        Retour à Aujourd’hui
      </Link>
    </div>
  );
}
