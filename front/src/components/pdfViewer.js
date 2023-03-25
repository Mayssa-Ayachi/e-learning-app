import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = (url) => {
    console.log(url)
    return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

    <div
        style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '95vh',
            marginTop : '7.25vh'
        }}
    >
        <Viewer fileUrl={url.url} />
    </div>
    
    </Worker>);
};
export default PdfViewer;

 