
<?php for ($i=1; $i <= 12 ; $i++) { ?>

	<?php
		if ($i < 10) {
			$i = '0' . $i;
		}
	?>

	<div class="item">
		<div class="content">
			<div class="content-image">
				<div class="image">
					<a href="san-pham-chi-tiet.php" title="">
						<img src="assets/images/pr-<?php echo $i; ?>.jpg" alt="Feature">
					</a>
				</div>
			</div>

			<div class="content-box">
				<h4 class="content-name">
					<a href="san-pham-chi-tiet.php" title="Mẫu bán hàng 102">Mẫu bán hàng 102</a>
				</h4>

				<div class="content-price">
					<label>Giá: </label>
					<span>Miễn phí</span>
				</div>
			</div>

			<div class="content-button">
				<a href="#" title="" class="">
					<i class="icofont-shopping-cart icon"></i>
				</a>
			</div>
		</div>
	</div>

<?php } ?>