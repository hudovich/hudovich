<?php
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars($_POST["message"]);

        $to = "vitaliycall@gmail.com"; // Замените на ваш email
        $subject = "Новая заявка с сайта";
        $body = "Email: $email\n\nMessage:\n$message";
        $headers = "From: $email";
        if (mail($to, $subject, $body, $headers)) {
            http_response_code(200);
            echo "Message sent successfully.";
        } else {
            http_response_code(500);
            echo "Failed to send message.";
        }
    } else {
        http_response_code(403);
        echo "Invalid request method.";
    }
?>