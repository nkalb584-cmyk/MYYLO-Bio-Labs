import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-28 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-700">The page you requested does not exist.</p>
      <Link href="/shop" className="btn-primary mt-6">
        Back to shop
      </Link>
    </div>
  );
}
