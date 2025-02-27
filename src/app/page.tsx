export default async function Page() {
  // const posts = await getAllMdxMetadata();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-5 md:px-10">
      {/* Footer */}
      <footer className="w-full text-center mt-16 py-5">
        <p className="text-sm text-foreground/70">
          &copy; LoomLetter 2024-2025
        </p>
      </footer>
    </div>
  );
}
