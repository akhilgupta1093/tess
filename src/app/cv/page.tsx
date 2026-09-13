import Header from "../components/Header";
import PdfPreview from "../components/PdfPreview";

export default function CV() {
  // Google Drive file ID
  const fileId = "1XQH1i_Q52lZzloWXW3hmyiT6B2NvW0WB";
  const driveEmbedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />

      <main>
        <p className="mb-4 text-[15px]">
          <a href={downloadUrl} download="Tess_Snyder_CV.pdf">
            Download CV (PDF)
          </a>
        </p>
        <div className="w-full aspect-[8.5/11] md:h-[1100px] border border-gray-200 overflow-hidden">
          <PdfPreview url={driveEmbedUrl} />
        </div>
      </main>
    </div>
  );
}
