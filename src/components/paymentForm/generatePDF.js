'use client';
import { PDFDocument } from 'pdf-lib';
import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const samplePDF = '/carta-motivo.pdf';

export const GeneratePDF = () => {
  const sigRef = useRef(null);
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [isSigning, setIsSigning] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  const handleFirma = async () => {
    if (!sigRef.current || sigRef.current.isEmpty()) {
      alert('Por favor, firma antes de continuar.');
      return;
    }

    try {
      setIsSigning(true);
      const existingPdfBytes = await fetch(samplePDF).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      const signatureDataUrl = sigRef.current.getTrimmedCanvas().toDataURL('image/png');
      const signatureImageBytes = await fetch(signatureDataUrl).then((res) => res.arrayBuffer());
      const signatureImage = await pdfDoc.embedPng(signatureImageBytes);

      const page = pdfDoc.getPages()[0];
      page.drawImage(signatureImage, {
        x: 50,
        y: 100,
        width: 200,
        height: 80,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      setPdfBlobUrl(url);
      setHasSigned(true);
    } catch (error) {
      console.error('Error firmando el PDF:', error);
      alert('Hubo un problema al firmar el PDF.');
    } finally {
      setIsSigning(false);
    }
  };

  const clearSignature = () => {
    sigRef.current.clear();
    setHasSigned(false);
    setPdfBlobUrl(null);
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: 'auto' }}>
      <h2 style={{ marginBottom: 20 }}>Firma el PDF</h2>

      <div style={{ border: '1px solid #ccc', marginBottom: 20 }}>
        <iframe
          src={pdfBlobUrl || samplePDF}
          width="100%"
          height="600"
          title="PDF para firmar"
        />
      </div>

      <h4>Dibuja tu firma aquí:</h4>
      <SignatureCanvas
        ref={sigRef}
        penColor="black"
        canvasProps={{
          width: 400,
          height: 150,
          style: { border: '1px solid #000', marginBottom: 10 },
        }}
      />

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={handleFirma} disabled={isSigning}>
          {isSigning ? 'Firmando...' : 'Firmar PDF'}
        </button>
        <button onClick={clearSignature}>Borrar firma</button>
      </div>

      {hasSigned && pdfBlobUrl && (
        <div style={{ marginTop: 20 }}>
          <h4>PDF firmado:</h4>
          <a
            href={pdfBlobUrl}
            download="firmado.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar PDF firmado
          </a>
        </div>
      )}
    </div>
  );
};
