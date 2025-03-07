# Car Model Classifier for Turners Cars Insurance

A React-based web application that uses Azure Custom Vision AI to identify car models from images. This tool helps users classify car models by either uploading an image file or providing an image URL.

## Features

- Image classification using Azure Custom Vision AI
- Dual input methods:
  - Image URL input
  - Local file upload
- Real-time prediction results
- Responsive design
- User-friendly interface

## Technologies Used

- React.js
- Axios for API calls
- Azure Custom Vision AI
- CSS3 for styling
- Create React App as the build tool

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Azure Custom Vision API key

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:
```bash
cd mission-01
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

1. **Using Image URL:**
   - Paste a car image URL into the text input
   - Click "Classify Image"
   - View the prediction results

2. **Using File Upload:**
   - Click the file upload button
   - Select an image file from your computer
   - Click "Classify Image"
   - View the prediction results

## API Configuration

The application uses Azure Custom Vision AI with the following configuration:

- Endpoint: `https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/[your-project-id]/classify/iterations/Iteration2`
- Headers Required:
  - Prediction-Key: Your Azure Custom Vision prediction key
  - Content-Type: application/octet-stream (for file upload) or application/json (for URL)

## Error Handling

The application includes error handling for:
- Invalid image formats
- Network errors
- API response errors
- Missing inputs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Azure Custom Vision AI for providing the image classification service
- Create React App for the project bootstrap
- Turners Cars Insurance for the project inspiration
