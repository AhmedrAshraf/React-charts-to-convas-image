// File Upload Page guide taken from:
// https://www.filestack.com/fileschool/react/react-file-upload/

// Imports
import { useState } from "react";
import organizeData from "../functions/csvOrganizer";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../firebaseConfig";

// Component for File Uploading
const FileUpload = () => {
  const [file, setFile] = useState();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  // Function for organizing and submitting the data to Firebase
  const submitData = async () => {
    const organizedData = await organizeData(file);

    const dataUpload = httpsCallable(functions, "admin-dataUpload");
    dataUpload({ dataToUpload: organizedData }).catch(function (error) {
      console.error(
        "There was an error uploading a file to Cloud Storage:",
        error
      );
    });
  };

  // Page data to be returned
  return (
    <div>
      <form>
        <h1>CSV File Upload</h1>
        <input type="file" onChange={handleFileChange} accept=".csv" />
        <button type="button" onClick={submitData}>
          Upload
        </button>
        <label id="errorText" />
      </form>
    </div>
  );
};

export default FileUpload;
