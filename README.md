# Multilingual Coding Assistant

## Overview

The Multilingual Coding Assistant is a web-based application that provides code suggestions and assistance in multiple languages. It utilizes the Cohere API to generate code snippets and respond to user queries. The application aims to assist developers by providing a real-time chat interface where users can input prompts and receive code-related responses.

## Features

- **Real-Time Chat Interface**: Users can interact with the assistant through a chat interface.
- **Multilingual Support**: The assistant can understand and generate responses in multiple programming languages.
- **Cohere API Integration**: Utilizes advanced language models to generate code snippets and assist with programming queries.

## Tech Stack

### Frontend

- **HTML/CSS**: Used for structuring and styling the chat interface.
- **JavaScript**: Handles user interactions and communicates with the backend.

### Backend

- **Flask**: A lightweight WSGI web application framework in Python.
- **Cohere**: Provides language processing capabilities for generating responses.

## Directory Structure

```plaintext
multilingual-coding-assistant/
├── app.py                # Backend Flask application
├── requirements.txt      # Python dependencies
├── frontend/
│   ├── index.html        # Main HTML file
│   ├── styles.css        # CSS styling
│   └── app.js            # JavaScript for frontend logic
├── run.bat               # Windows script to run the app
└── run.sh                # Unix script to run the app
```

## Setup Instructions

1. **Clone the Repository:**

```bash
   git clone https://github.com/aliplayer1/multilingual-coding-assistant.git
   cd multilingual-coding-assistant
```

2. **Install Dependencies:**

Make sure you have Python and pip installed. Then, install the required Python packages:

```bash
    pip install -r requirements.txt
```

3. **Set Up Cohere API Key:**

Replace the placeholder in app.py with your actual Cohere API key:

```python
    co = cohere.Client('your_api_key_here')
```

4. **Run the Application**

For Windows:

```bash
    run.bat
```

for Unix/Linux:

```bash
    ./run.sh
```

5. **Access the Application**

Open your browser and go to http://127.0.0.1:5000 to start using the Multilingual Coding Assistant.

## Usage

- Enter your programming queries or prompts in the chat input box.
- Click the "Send" button or press Enter to receive responses.
- The assistant will provide code suggestions and explanations based on the input provided.

## Future Improvements

- Expand support for additional programming languages.
- Enhance the user interface for a better user experience.
- Implement user authentication for personalized experiences.

## License

- This project is licensed under the MIT License.