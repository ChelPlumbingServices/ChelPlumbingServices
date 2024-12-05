<?php
// Ensure the PHPMailer classes are loaded
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Include the PHPMailer autoloader (adjust path if needed)

// Process the form if it's submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize the form data
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $message = htmlspecialchars($_POST['message']);

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@gmail.com';  // Replace with your Gmail address
        $mail->Password = 'your-email-password';  // Use your Gmail password or app-specific password (if 2FA is enabled)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Sender and recipient details
        $mail->setFrom('your-email@gmail.com', 'Chel Plumbing Services');  // Your email
        $mail->addAddress('youremail@example.com', 'Receiver Name');  // Your email address for receiving the message

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Message from ' . $name;
        $mail->Body    = "Name: $name<br>Contact: $contact<br>Message: $message";

        // Send the email
        if ($mail->send()) {
            echo "<p>Thank you for your message! We will get back to you soon.</p>";
        } else {
            echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
        }
    } catch (Exception $e) {
        echo "<p>Sorry, there was an error sending your message. Error: {$mail->ErrorInfo}</p>";
    }
}
?>