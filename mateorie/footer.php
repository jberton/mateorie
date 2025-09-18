		<footer>
			<div class="top-footer">
				<!-- bouton contact -->
				<a href="#" class="top-footer-contact">
					<p>Nous <br>contacter</p>
					<div class="fleche-contact"></div>
				</a>
				<!-- menu footer -->
				<?php
					$defaults = array(
					'theme_location' => 'footer-menu', 
					'container' => '', 
					'menu_class' => 'my-footer-menu', 
					'menu' => 'footer'
					);
					wp_nav_menu($defaults);
				?>
			</div>

			<div class="bottom-footer">
				<!-- logo linkedin -->
				<img src="<?= get_stylesheet_directory_uri() . "/assets/images/linkedin-mateorie.png" ?>" alt="Linkedin Mateorie">
				<!-- séparateur -->
				<div class="separateur-footer"></div>
				<!-- liens mentions légales + pol. conf. -->
				<a href="#">Mentions légales</a>
				<a href="#">Politique de confidentialité</a>
			</div>

			<p>© Copyright 2025 – Mateorie. Tous droits réservés</p>

		</footer>
		<?php wp_footer(); ?>
	</body>
</html>