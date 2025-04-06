import Navbar from "../components/Navbar";
import PdfPreview from "../components/PdfPreview";

export default function CV() {
  // Google Drive file ID
  const fileId = "1XQH1i_Q52lZzloWXW3hmyiT6B2NvW0WB";
  const driveViewUrl = `https://drive.google.com/file/d/${fileId}/view`;
  const driveEmbedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">Tess Snyder</h1>
        <Navbar />
      </header>

      <main>
        <div className="w-full aspect-[8.5/11] md:h-[1100px] border border-gray-200 rounded-md overflow-hidden">
          <PdfPreview url={driveEmbedUrl} />
        </div>

        <div className="w-full bg-accent rounded-md p-4 text-center mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={downloadUrl}
              className="text-primary font-medium underline"
              download="Tess_Snyder_CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
