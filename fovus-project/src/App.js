import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [file, setFile] = useState(null);
  const apiGatewayUrl = 'https://ocl924bfv1.execute-api.us-east-2.amazonaws.com/prod/'; // Your actual API Gateway URL

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!file) {
    console.error('No file selected.');
    return;
  }

  try {
    const response = await fetch(`${apiGatewayUrl}presigned-url?fileName=${encodeURIComponent(file.name)}`);
    if (!response.ok) {
      console.error('Failed to fetch the pre-signed URL:', response.status, response.statusText);
      return;
    }

    // Parse the JSON to get the actual URL for uploading the file
    const { putUrl } = await response.json(); // Use 'putUrl' for uploads

    if (!putUrl) {
      console.error('No upload URL received');
      return;
    }

    // Use the obtained URL to upload the file
    const uploadResponse = await fetch(putUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!uploadResponse.ok) {
      console.error('File upload failed:', uploadResponse.status, uploadResponse.statusText);
      return;
    }

    console.log('File uploaded successfully.');
  } catch (error) {
    console.error('Error getting a signed URL or uploading the file:', error);
  }
};



  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={centerStyle}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label style={{ margin: '10px 0' }}>
          Text input:
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="InputText"
            style={{ marginLeft: '10px', flex: 1 }}
          />
        </label>
        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
          <span style={{ marginRight: '10px' }}>File input:</span>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ flex: 1 }}
          />
        </div>
        <button type="submit" style={{ width: '100px', alignSelf: 'flex-start' }}>Submit</button>
      </form>
    </div>
  );
}

export default App;



