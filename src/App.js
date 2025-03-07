import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle the image URL change
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl(""); // Clear URL input when file is selected
    }
  };

  const handleClassifyImage = async () => {
    setLoading(true);
    setPredictions([]);
    setError("");

    const baseUrl =
      "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0c1503db-09ce-48b4-accb-41dbee9c2f6d/classify/iterations/Iteration2";
    const predictionKey = "8401d7d771ef448db83f5d445b851844";

    try {
      let response;

      if (imageFile) {
        // Handle file upload
        response = await axios.post(`${baseUrl}/image`, imageFile, {
          headers: {
            "Prediction-Key": predictionKey,
            "Content-Type": "application/octet-stream",
          },
        });
      } else if (imageUrl) {
        // Handle URL-based classification
        response = await axios.post(
          `${baseUrl}/url`,
          { Url: imageUrl },
          {
            headers: {
              "Prediction-Key": predictionKey,
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        throw new Error("Please provide an image URL or upload a file");
      }

      if (response.data.predictions && response.data.predictions.length > 0) {
        setPredictions(response.data.predictions);
      } else {
        setError("No predictions found.");
      }
    } catch (err) {
      setError("Error classifying image. Please try again.");
      console.error("API Error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Turners Cars Insurance</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
          disabled={imageFile !== null}
        />
      </div>

      <div className="file-input-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={imageUrl !== ""}
        />
      </div>

      <button
        onClick={handleClassifyImage}
        disabled={loading || (!imageUrl && !imageFile)}
      >
        {loading ? "Predicting..." : "Classify Image"}
      </button>

      {loading && <p className="loading">Loading...</p>}

      {predictions.length > 0 && (
        <div className="predictions">
          <h2>Predictions:</h2>
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                <strong>{prediction.tagName}:</strong>{" "}
                {Math.round(prediction.probability * 100)}%
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
