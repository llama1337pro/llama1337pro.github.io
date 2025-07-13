<?php
// Set the Content-Type header to text/html
header('Content-Type: text/html');

// Allow requests from any origin (CORS - Cross-Origin Resource Sharing).
// In a production environment, you should replace '*' with the specific origin(s) of your frontend.
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); // Allow POST, GET, and OPTIONS methods
header('Access-Control-Allow-Headers: Content-Type'); // Allow Content-Type header

// Define the file to store the last content
$content_file = 'last_content.txt';

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
echo '    <title>Last Sent Content</title>';
echo '</head>';
echo '<body>';
echo '    <div>';

$display_content = ""; // Default to empty string if no content is found initially
$status_code = 200;

// Handle POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data (which will be JSON in our case)
    $json_data = file_get_contents('php://input');

    // Decode the JSON data into a PHP associative array
    $data = json_decode($json_data, true);

    // Check if JSON decoding was successful and if 'title' field exists
    if (json_last_error() === JSON_ERROR_NONE && isset($data['title'])) {
        $received_content = $data['title'];

        // Sanitize content before saving to file and displaying
        $sanitized_content = htmlspecialchars($received_content, ENT_QUOTES, 'UTF-8');

        // Save the received content to the file
        if (file_put_contents($content_file, $sanitized_content) !== false) {
            $display_content = "\"" . $sanitized_content . "\""; // Display only the content in quotes
            $status_code = 200; // OK
        } else {
            $display_content = "Error saving content to file."; // Removed span.error
            $status_code = 500; // Internal Server Error
        }
    } else {
        // Handle invalid JSON or missing 'title' field
        $display_content = "Invalid data received. Please ensure you are sending JSON with a \"title\" field."; // Removed span.error
        $status_code = 400; // Bad Request
    }
}
// Handle GET requests (or after a POST request has been processed)
else {
    if (file_exists($content_file) && ($saved_content = file_get_contents($content_file)) !== false) {
        $saved_content = trim($saved_content); // Remove any leading/trailing whitespace
        if (!empty($saved_content)) {
            $display_content = "\"" . $saved_content . "\""; // Display only the content in quotes
        } else {
            $display_content = ""; // Display empty if file is empty
        }
    } else {
        $display_content = ""; // Display empty if file does not exist
    }
    $status_code = 200; // OK for GET requests displaying status
}

// Display the content - Removed the <h1> tag, only displaying the <p>
echo '        <p>' . $display_content . '</p>';

// Set the HTTP response code
http_response_code($status_code);

// Close the HTML
echo '    </div>';
echo '</body>';
echo '</html>';
?>
