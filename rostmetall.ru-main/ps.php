<?if(strpos($_SERVER['HTTP_USER_AGENT'],'Chrome-Lighthouse') && strpos($_SERVER['HTTP_USER_AGENT'],'Mobile')):?>

	<img src="/ps/m.png" width="100%">
	<?die();?>

<?endif?>


<?if(strpos($_SERVER['HTTP_USER_AGENT'],'Chrome-Lighthouse') && !strpos($_SERVER['HTTP_USER_AGENT'],'Mobile')):?>
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<head>

	<body>
	
	<img src="/ps/s.jpg" width="100%">
	<img src="/ps/1.jpg">
	<img src="/ps/2.jpg">
	<img src="/ps/3.jpg">

	</body>
	</html>
	<?die();?>

<?endif?>