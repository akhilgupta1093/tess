import Navbar from "../components/Navbar";

export default function CV() {
  // Google Drive file ID
  const fileId = "1XQH1i_Q52lZzloWXW3hmyiT6B2NvW0WB";
  const driveViewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const driveEmbedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

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
              href={driveViewUrl}
              className="text-primary font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              view it in Google Drive
            </a>
            .
          </p>
        </div>

        <div className="w-full h-[800px] border border-gray-200 rounded-md overflow-hidden">
          <iframe
            src={driveEmbedUrl}
            width="100%"
            height="100%"
            allow="autoplay"
            className="w-full h-full"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
