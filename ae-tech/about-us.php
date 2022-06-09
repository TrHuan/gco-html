<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-about-us">

	<?php include 'templates/header.php'; ?>

	<!-- //////////////////////////////////////////////////////////// -->

	<div class="art-breadcrumbs">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="breadcrumbs-box">
						<div class="image-box breadcrumb-image">
							<img src="assets/images/bg-breadcrumb-01.jpg" alt="Banner">
						</div>

						<div class="breadcrumbs-content">
							<div class="title-box breadcrumb-title">
								<h1 class="title">
									<span>Về chúng tôi</span>
								</h1>
							</div>
							<div class="content-box content-breadcrumb">
								<ul class="breadcrumb-box">
									<li>
										<a href="index.php" title="Trang chủ">Trang chủ</a>
									</li>
									<li>
										<span>Về chúng tôi</span>
									</li>
								</ul>
							</div>
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

				<article class="art-banners art-histories">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/banners-histories.php'; ?>
						</div>
					</div>
				</article>

				<article class="art-banners art-about-us">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/banners-2.php'; ?>
						</div>
					</div>					
				</article>

				<article class="art-personnels">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/personnels.php'; ?>
						</div>
					</div>
				</article>

				<article class="art-banners art-histories art-introduces">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/banners-histories-2.php'; ?>
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