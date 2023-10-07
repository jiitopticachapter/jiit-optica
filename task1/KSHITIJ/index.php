<?php
// Database connection
$submit = false;
if (isset($_POST['name']))
{
   //set connection variable
$server = "localhost";
$username = "root";
$password = "";
$dbname = "trip";
$port = 3307;
$socket = "C:/xampp/mysql/mysql.sock";

//create a connection
$con = mysqli_connect($server, $username, $password, $dbname, $port, $socket);
//check for connection success
if (!$con) {
    die("Connection to the database failed due to " . mysqli_connect_error());
} else {
    // echo "Successfully connected to the database";
}

// Check if the form has been submitted

//collect the post variables
    $namee = $_POST['name'];
    $age =$_POST['age'];
    $gender =  $_POST['gender'];
    $email = $_POST['email'] ;
    $phone = $_POST['phone'] ;
    $other = $_POST['other'] ;
    // validationn of the form
    // empty 
    $errors = array(); // Create an array to store error messages
    if(empty($namee)||empty($age)||empty($gender)||empty($email)||empty($phone)||empty($other))
    {
       array_push($errors,"You have not entered the details correctly");
    //    exit();
    }
   
      if($age > 18)
      {
       array_push($errors, "You are not eligble to go to US Trip");
        // exit();
      }
      if(strlen($phone) != 10)
      {
       array_push($errors , "You have entered the wrong number ".$namee );
        // exit();
      }
    //   validatee email
    if(strpos($email, '@') == false)
    {
        array_push($errors,"You have entered the wrong email ".$namee);
        // exit();
    }

    
if(count($errors)!= 0)
{
     echo " <h3>FORM IS NOT SUBMITTED </h3>";
      echo " <p>Reasons are given below</p>";
        echo " <ul>";
        for($i=0; $i < count($errors) ; $i++) { 
            echo   " <li> $errors[$i] <br> </li>";
           }
         echo "</ul>";
       exit();

}


    $sql = "INSERT INTO `ustrip` (`name`, `age`, `gender`, `email`, `phone`, `other`, `date`) 
            VALUES ('$namee', '$age', '$gender', '$email', '$phone', '$other', current_timestamp())";

//execute the query
    if ($con->query($sql) === true) {
        //flag for successsfull insertion
         $submit = true;

    } else {             
        echo "ERROR: " . $sql . "<br>" . $con->error;
    }
    //close the database connection
    $con->close();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To travel Form</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Sriracha&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <img class="bg" src="images/2.jpg" alt="IIT KHARAGPUR">
    <div class="container">
        <h1>Welcome to IIT Kharagpur US Trip form</h1>
        <p>Enter you details to confirm your participation in the trip</p>
          <?php  
          if($submit == true)
          {
            echo "<p id='thanks'>Thanks for submitting the form. We are happy to see you
                 joining for the US Trip.
                 </p>";
          }
        ?>
        <form class="myform" action="index.php" method="POST">
            <input required type="text" name="name" placeholder="Enter you name"> <br>
            <input required type="number" name="age" placeholder="Enter you age"> <br>
            <input required type="text" name="gender" placeholder="Enter you gender"> <br>
            <input required type="text" name="email" placeholder="Enter your email"> <br>
            <input required type="tel" name="phone" placeholder="Enter you phone numer"> <br>
            <textarea required name="other" cols="30" rows="10" placeholder="Enter any other information here"></textarea> <br>
            <button class="btn button">Submit</button>
            <button type="reset"class="btn">Reset </button>
        </form>
    </div>
    <script src="index.js"></script>

    <!-- INSERT INTO `ustrip` (`Sno`, `name`, `age`, `gender`,
     `email`, `phone`, `other`, `date`) VALUES ('1', 'admin gupta',
    '18', 'male', 'admin@123', '9711211111', 'Glad i reached here.',
     current_timestamp()); -->
</body>
</html>
<!-- $errors = []; // Create an array to store error messages

// Validation checks go here
if (empty($namee)) {
    $errors[] = "Name is required.";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email address.";
}

// Add more validation checks as needed -->

<?php
// $errors = []; // Create an array to store error messages

// if (isset($_POST['submit'])) {
//     $namee = $_POST['name'];
//     $email = $_POST['email'];
    
//     // Validation checks go here
//     if (empty($namee)) {
//         $errors[] = "Name is required.";
//     }

//     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//         $errors[] = "Invalid email address.";
//     }

    // Add more validation checks as needed

    // if (empty($errors)) {
        // Proceed with database insertion if there are no errors
        // Your database insertion code goes here
    // }
// }
?>
<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
    Your HTML head section goes here
</head>
<body>
 Display error messages if there are any 
    <?php if (!empty($errors)): ?>
        <ul>
            <?php foreach ($errors as $error): ?>
                <li><?php echo $error; ?></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>

    Display the form 
    <form action="process_form.php" method="POST">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="text" name="email" placeholder="Enter your email">
    Other form fields go here
        <button type="submit" name="submit">Submit</button>
    </form>
</body>
</html> -->

