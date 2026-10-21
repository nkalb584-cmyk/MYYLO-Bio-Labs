import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="MYYLO bio Labs home" className="inline-flex items-baseline gap-1.5">
      <span className={`text-2xl font-extrabold tracking-[0.12em] ${light ? "text-white" : "text-navy-900"}`}>
        MYYLO
      </span>
      <span className={`text-sm font-medium tracking-wide ${light ? "text-teal-100" : "text-teal-700"}`}>
        bio Labs
      </span>
    </Link>
  );
}
