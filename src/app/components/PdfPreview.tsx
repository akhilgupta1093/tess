"use client";

import { useState } from "react";
import Image from "next/image";

interface PdfPreviewProps {
  url: string;
}

export default function PdfPreview({ url }: PdfPreviewProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Handle loading state
  const handleLoad = () => {
    setLoading(false);
  };

  // Handle error state
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="relative h-full w-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {error ? (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="relative w-full h-64">
            <Image
              src="https://via.placeholder.com/400x300?text=PDF+Document"
              alt="PDF Preview Fallback"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <p className="text-red-500 text-xs mt-2">
            Could not load PDF preview
          </p>
        </div>
      ) : (
        <iframe
          src={`${url}#toolbar=0&view=FitH`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "0.375rem",
          }}
          onLoad={handleLoad}
          onError={handleError}
          title="PDF Preview"
        />
      )}
    </div>
  );
}
