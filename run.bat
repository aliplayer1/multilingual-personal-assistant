:: run_and_open_browser.bat

:: Activate virtual environment
call backend\venv\Scripts\activate.bat

:: Run the Flask app in the background
start python backend\app.py

:: Wait a few seconds to ensure the server is running
timeout /t 5

:: Open the default web browser to the local server
start "" "http://127.0.0.1:5000"
