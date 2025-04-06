import Navbar from "../components/Navbar";

export default function CV() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Tess Snyder</h1>
        <Navbar />
      </header>

      <main>
        <h2 className="text-3xl font-bold mb-8">Curriculum Vitae</h2>

        <div className="w-full bg-accent rounded-md p-4 text-center mb-6">
          <p>
            The CV is embedded below. You can also{" "}
            <a
              href="/placeholder-cv.pdf"
              className="text-primary font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              download it here
            </a>
            .
          </p>
        </div>

        <div className="w-full h-[800px] border border-gray-200 rounded-md overflow-hidden">
          {/* This is a placeholder for the PDF. In production, you should use an actual PDF file. */}
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">
              PDF Viewer Placeholder - Replace with actual CV PDF
            </p>
          </div>

          {/* Uncomment this when you have a real PDF file
          <object
            data="/path-to-cv.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            <p>
              It appears you don't have a PDF plugin for this browser.
              You can <a href="/path-to-cv.pdf">click here to download the PDF file.</a>
            </p>
          </object>
          */}
        </div>
      </main>
    </div>
  );
}
