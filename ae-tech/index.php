<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-home">

	<?php include 'templates/header.php'; ?>

	<!-- //////////////////////////////////////////////////////////// -->

	<div class="art-breadcrumbs" style="display: none;">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="breadcrumbs-content">
						<div class="image-box breadcrumb-image">
							<img src="#" alt="Breadcrumb">
						</div>
					</div>				
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="breadcrumbs-content">
						<div class="title-box breadcrumb-title">
							<h1 class="title">Trang chủ</h1>
						</div>
						<div class="content-box breadcrumb-content">
							<ul class="breadcrumb-box">
								<li>
									<a href="index.php" title="Trang chủ">Trang chủ</a>
								</li>
								<li>
									<span>Trang chủ</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> <!--breadcrumbs-->

	<!-- //////////////////////////////////////////////////////////// -->

	<main class="main-page">
		<div class="main-container">
			<div class="main-content">
				<article class="art-slidershow">
					<div class="container-fluid">
						<div class="row">
							<?php include 'templates/addons/slidershow.php'; ?>
						</div>
					</div>
				</article>

				<article class="art-banners art-introduces">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/banners.php'; ?>
						</div>
					</div>
				</article>				

				<article class="art-services">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/services.php'; ?>
						</div>
					</div>
				</article>

				<article class="art-banners art-videos">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/videos.php'; ?>
						</div>
					</div>
				</article>						

				<article class="art-products">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/products.php'; ?>
						</div>
					</div>
				</article>						

				<article class="art-brands">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/brands.php'; ?>
						</div>
					</div>
				</article>							

				<article class="art-posts">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/posts.php'; ?>
						</div>
					</div>
				</article>	

			</div>
		</div>
	</main> <!-- main-site -->

	<!-- //////////////////////////////////////////////////////////// -->

	<?php include 'templates/footer.php'; ?>

</body>
</html>