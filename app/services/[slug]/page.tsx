export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;

    return (
        <main className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-24">
            <h1 className="text-6xl font-bold capitalize mb-4">
                {slug.replace(/-/g, ' ')}
            </h1>
            <p className="text-xl text-gray-400">
                Service Details Coming Soon.
            </p>
            <a href="/" className="mt-8 text-amber-500 hover:text-amber-400 underline">
                Back to Home
            </a>
        </main>
    );
}
