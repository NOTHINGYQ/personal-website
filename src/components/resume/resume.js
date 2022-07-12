import Nav from "../NavBar/nav";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import {useState} from "react";

function Resume(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return(
        <div>
            <Nav/>
            <Document file='../../media/yu-liu.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>

        </div>

    )
}
export default Resume;