<?php
    // Retrieve form data
    $username = $_POST["Name"];
    $email = $_POST["Email"];
    $contactNumber = $_POST["contactNumber"];
    $password = $_POST["Password"];
   

    // Connect to your database (replace with your actual database credentials)

    $conn = new mysqli('localhost', 'root','' , 'sign_in');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }else{
     $stmt=$conn->prepare("INSERT INTO registration (username, email, contactNumber, password) VALUES (?,?, ?, ?)");
     $stmt->bind_param("sssi",$username, $email, $contactNumber, $password);
     $stmt->execute();
     echo"registration successfully";
     $stmt->close();
     $conn->close();    
    }
    if ($stmt->execute()) {
      echo "Registration successful";
  } else {
      echo "Error: " . $stmt->error;
  }
  

   

