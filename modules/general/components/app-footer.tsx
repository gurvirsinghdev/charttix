import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="px-6 text-sm max-w-(--breakpoint-xl) mx-auto flex-col-reverse sm:flex-row! flex items-center justify-between py-4">
      <div>Charttix &copy; 2025. All Rights Reserved.</div>
      <div className="flex gap-3 items-center">
        <Link
          className="text-muted-foreground hover:text-accent-foreground"
          href={"/privacy-policy"}
        >
          Privacy Policy
        </Link>
        <Link
          className="text-muted-foreground hover:text-accent-foreground"
          href={"/terms-and-conditions"}
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
