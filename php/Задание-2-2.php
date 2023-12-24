<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <?php 
        for ($i=0; $i<rand(100,999);$i++) {
            echo "<li>".rand(100,999)."</li> ";
        }
        ?>
    </ul>
</body>
</html>