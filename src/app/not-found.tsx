export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="font-heading text-hero font-bold tracking-tight mb-4">
                    404
                </h1>
                <p className="text-[var(--muted)] text-lg mb-8">
                    This page does not exist.
                </p>
                <a
                    href="/"
                    className="text-sm text-accent hover:underline underline-offset-4"
                >
                    Return home
                </a>
            </div>
        </div>
    );
}
