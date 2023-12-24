<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form action="">
        <input type="date" name="dateOfBirth" id="dateOfBirth"
         value=<?php 
         if (empty($_GET["dateOfBirth"])) {
            echo "";
         } else {
         $dateOfBirthVar = $_GET["dateOfBirth"];
            echo $dateOfBirthVar;
        }
        ?>>
        <input type="submit" value="go" id="submit">
        <a href="<?php echo "Задание-2-1(2).php?dateOfBirth=$dateOfBirthVar" ?>">new page</a>
    </form>
    <script>
        let currDate = new Date;
        let firstDate = new Date(((new Date).getFullYear())-120, 0, 1);
        document.getElementById("dateOfBirth").min=firstDate.toISOString().split("T")[0];
        document.getElementById("dateOfBirth").max=currDate.toISOString().split("T")[0];

    </script>
</body>
</html>