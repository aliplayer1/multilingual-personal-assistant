#!/bin/bash
# run_and_open_browser.sh

# Activate virtual environment
source backend/venv/bin/activate

# Run the Flask app in the background
python backend/app.py &

# Wait a few seconds to ensure the server is running
sleep 5

# Open the default web browser to the local server
open http://127.0.0.1:5000

# Wait for the Flask app process to end (optional)
wait
