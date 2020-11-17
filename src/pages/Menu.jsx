import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import samplePDF from './../assets/files/menu.pdf';

const Menu = () => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  return (
    <main id='menu'>
      <div className='container'>
        <h1>MENU</h1>
        <Document file={samplePDF} onLoadError={console.error}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </main>
  );
};

export default Menu;
