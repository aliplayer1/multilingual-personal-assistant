from flask import Flask, request, jsonify
from flask_cors import CORS
import cohere

app = Flask(__name__)
CORS(app)

# Initialize Cohere Client
co = cohere.Client('V3j8234n4vEXmwHg1pJfmWWY6S6ffeoyTjG2AaVS')  # Replace with your actual API key

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message')

    # Generate response using Cohere API
    response = co.generate(
        model='command',
        prompt=user_message,
        max_tokens=150
    )

    return jsonify({'response': response.generations[0].text})

if __name__ == '__main__':
    app.run(debug=True)
