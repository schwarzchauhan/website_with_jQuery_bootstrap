<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:blue;">
    <?php
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            echo $_POST["name"]; 
            echo $_POST["email"]; 
        }
        $color = 'red';
        echo "my car is".$color." and young<br>";
        #dfa
        //dsfa
        $x = 89;
        echo $x+78,"heya".$x."fad";
        echo "<br>"."I like ".$x." very much";
    ?>   
</body>
</html>


