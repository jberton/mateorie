<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Mateorie - Le cabinet développe les entreprises de haute Savoie.</title>
		<?php wp_head(); ?>
	</head>
	<body style="overflow: visible;">
	<header>

		<nav id="navbar">
			<!-- menu principal -->
			<?php
				$defaults = array(
				'theme_location' => 'top', 
				'container' => '', 
				'menu_class' => 'nav navbar-nav menu__list', 
				'menu' => 'main-menu'
				);
				wp_nav_menu($defaults);
			?>
			<!-- image logo -->
			<div class="logo">
				<a href="<?= get_site_url() ?>">
					<img src="<?= get_stylesheet_directory_uri() . "/assets/images/logo-mateorie.jpg" ?>" alt="Logo Mateorie">
				</a>
			</div>
			<!-- Boutons Nous contacter + Etre rappelé -->
			<a href="#" class="btn-action">Nous contacter</a>
			<a href="#" class="btn-action">Être rappelé</a>

			<!-- menu burger -->
			<div class="burger" aria-expanded="false">
				<div class="line line1"></div>
				<div class="line line2"></div>
				<div class="line line3"></div>
			</div>
		</nav>

	</header>
