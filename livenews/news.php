<?php
// Set the Content-Type header to text/html
// This tells the client (your browser) that the response will be an HTML page.
header('Content-Type: text/html');

// Allow requests from any origin (CORS - Cross-Origin Resource Sharing).
// In a production environment, you should replace '*' with the specific origin(s) of your frontend.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Allow POST, GET, and OPTIONS methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow Content-Type header

// Handle OPTIONS request (preflight request for CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Start building the HTML response
echo '<!DOCTYPE html>';
echo '<html lang="en">';
echo '<head>';
echo '    <meta charset="UTF-8">';
echo '    <meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo '    <title>Received Content Display</title>';
echo '    <style>';
echo '        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f0f0f0; }';
echo '        .container { background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }';
echo '        h1 { color: #333; margin-bottom: 20px; }';
echo '        p { font-size: 1.2em; color: #555; }';
echo '        .error { color: red; font-weight: bold; }';
echo '    </style>';
echo '</head>';
echo '<body>';
echo '    <div class="container">';

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data (which will be JSON in our case)
    $json_data = file_get_contents('php://input');

    // Decode the JSON data into a PHP associative array
    $data = json_decode($json_data, true);

    // Check if JSON decoding was successful and if 'title' field exists
    if (json_last_error() === JSON_ERROR_NONE && isset($data['title'])) {
        $received_content = htmlspecialchars($data['title']); // Sanitize input for HTML output

        // Display the received content
        echo '        <h1>Content Received!</h1>';
        echo '        <p>"' . $received_content . '"</p>';
        http_response_code(200); // OK
    } else {
        // Handle invalid JSON or missing 'title' field
        echo '        <h1>Error</h1>';
        echo '        <p class="error">Invalid data received. Please ensure you are sending JSON with a "title" field.</p>';
        echo '        <p class="error">Error details: ' . htmlspecialchars(json_last_error_msg()) . '</p>';
        http_response_code(400); // Bad Request
    }
} else {
    // Handle non-POST requests
    echo '        <h1>Error</h1>';
    echo '        <p class="error">This page only accepts POST requests.</p>';
    http_response_code(405); // Method Not Allowed
}

// Close the HTML
echo '    </div>';
echo '</body>';
echo '</html>';

// No need for json_encode or exit here as we've outputted the full HTML
?>
