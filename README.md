# 📄 Text Summary Chrome Extension

This is a **Chrome extension** that provides on-the-fly summarization of any webpage content or highlighted text. The extension leverages a Flask backend hosted on Render to perform content summarization using state-of-the-art NLP models.

## 🚀 Features

- **Instant Summarization**: Get a concise summary of any webpage in seconds!
- **Highlight and Summarize**: You can also highlight specific text and get a summary just for that section.
- **Seamless Integration**: A simple button click on the Chrome extension triggers the summarization process.
- **Cutting-Edge NLP Model**: Utilizes a Transformer model (DistilBART) to provide high-quality summaries.

## 🛠️ Tech Stack

- **Frontend**: Chrome Extension (HTML, JavaScript)
- **Backend**: Flask (Python)
- **NLP Model**: [DistilBART](https://huggingface.co/sshleifer/distilbart-cnn-12-6) from Hugging Face for text summarization
- **Deployment**: Hosted on [Render](https://render.com)

## 🔧 Setup & Installation

### Prerequisites

1. **Chrome Browser**
2. **Python** (if you want to run the backend locally)
3. A [Render account](https://render.com) (if you wish to deploy your own version)

### 📚 Resources
- **Chrome Extensions Documentation
- **Flask Documentation
- **Hugging Face DistilBART Model

## 🚧 Future Improvements
Support for Multiple Languages: Expand the summarization to support more languages.
Offline Mode: Allow the summarization to work even without internet connectivity using local models.

## 🙌 Contributing
Feel free to submit a pull request or raise an issue if you'd like to contribute to the project.
