import React from 'react';
import resume from '../../assets/resume.pdf'
import { FaFileDownload } from 'react-icons/fa' 
const Resume = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <h1 className='resume'>Resume</h1>
                <h3>Click on below button to download as PDF</h3>
                <a href={resume} className="download-logo" download>
                <FaFileDownload/>
              </a>
            </center>
        </>
    );

}
export default Resume;