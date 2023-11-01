import { useState } from 'react'
import './App.css'
import TopText from './components/TopText'
import React from 'react'


export default function App() {
  
  const [filesToUpload, setFilesToUpload] = React.useState([])
	
	function handleSubmit(e) {
		e.preventDefault()
		filesToUpload.forEach(file => console.log(file))
	}
	
	function handleChange(e) {
		const filesData = [...e.target.files].map(file => ({
			fileName: file.name,
			fileType: file.type,
			fileSize: file.size
		}))
		setFilesToUpload(filesData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<TopText />
			
			<input 
				type="file"
				required
				multiple
				accept=".png, .jpg, .jpeg, .pdf"
				onChange={handleChange}
			/>
			
			<button>Upload </button>
      <div className="details">
          <h2>File details:</h2>
          <ul>
            {filesToUpload.map((file, index) => (
              <li key={index}>
                <strong>File Name:</strong> {file.fileName}
                <br />
                <strong>File Type:</strong> {file.fileType}
                <br />
                <strong>File Size:</strong> {file.fileSize} bytes
              </li>
            ))}
          </ul>
        </div>
      
		</form>
	)
}
