<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $salary = array(
        "Коля" => 50000,
        "Петя" => 60000,
        "Саша" => 70000,
    );
    ?>
    <table>
        <tbody>
            <?php
            foreach ($salary as $key => $value) {
              echo  "<tr><td>$key</td><td>$value</td></tr>";
            }
            ?>
        </tbody>
    </table>
    <?php echo $salary["Коля"] ?>
    <form action="">
        <input type="text">
        <input type="submit" value="submit" id="submit">
    </form>
</body>
</html>