<?php
$servername = "sql208.byetcluster.com";
$username = "if0_36600271";
$password = "XafDBD0OxCn58U";
$dbname = "rentcars";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM cars";
$result = mysqli_query($conn, $sql);
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>DB Connection</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<div class="container">
		<div class="products" id="products">
			<?php

			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
					?>
					<div >
						<label><?php echo $row["name"] ?></label>
						<label><?php echo $row["price"] ?></label>
						
					</div>
					<?php
				}
			} else {
				echo "0 results";
			}
			?>
		</div>

	</div>
</body>
</html>
