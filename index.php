<?php
	defined('_JEXEC') or die;
	$doc = JFactory::getDocument();
	$tpath = $this->baseurl . '/templates/' . $this->template;	
	$this->_scripts = array(); // Disable loading core components
	unset($this->_script['text/javascript']);
?>
<!DOCTYPE html>
<html>
<head>
	<jdoc:include type="head" />
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width; initial-scale=1; maximum-scale=1; minimum-scale=1; user-scalable=no;" />	
	<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700italic,700,400italic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?=$tpath?>/css/style.css">

	<script src="http://localhost:35729/livereload.js?snipver=1"></script>
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

	<body>
		<header>
			<!--Navigation-->
			<nav class="navbar navbar-webgen navbar-static-top">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">WebGen</a>
					</div>
					<div id="navbar" class="collapse navbar-collapse">
						<?php  if ($this->countModules('navigation')) : ?>
                        <nav class="navigation" role="navigation">
                                <jdoc:include type="modules" name="navigation" style="none" />
                        </nav>
                        <?php  endif; ?>
						<!--<ul class="nav navbar-nav navbar-right">
							<li class="active"><a href="#">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>-->
					</div><!--/.nav-collapse -->
				</div>
			</nav>
			<!--Navigation-->
		</header>

		<!-- content-top -->
		<?php  if($this->countModules('content-top')) : ?>
		<div id="content-top">
			<div class="row">
				<jdoc:include type="modules" name="content-top" style="block" />	
			</div>
		</div>
		<?php  endif; ?>
		<!-- content-top -->

		<!-- breadcrumbs -->
		<div id="breadcrumbs">
			<div class="row">
				<jdoc:include type="modules" name="breadcrumbs" style="block" />
			</div>
		</div>
		<!-- breadcrumbs -->

		<!-- content -->
		<jdoc:include type="message" />
		<jdoc:include type="component" />
		<!-- content -->

		<!-- content-bottom -->
		<?php  if($this->countModules('content-bottom')) : ?>
		<div id="content-bottom">
			<div class="row">
				<jdoc:include type="modules" name="content-bottom" style="block" />	
			</div>
		</div>
		<?php  endif; ?>
		<!-- content-bottom -->

		<!-- footer -->
		<?php  if($this->countModules('footer')) : ?>
		<div id="footer">
			<div class="container">
				<div class="row">
					<jdoc:include type="modules" name="footer" style="block" />
				</div>
			</div>
		</div>
		<?php  endif; ?>
		<!-- footer -->

		<jdoc:include type="modules" name="debug" />
		<script src="<?=$tpath?>/js/app.min.js"></script>
	</body>
</html>