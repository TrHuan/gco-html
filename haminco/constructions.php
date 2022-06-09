<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-waters">

	<?php include 'templates/header.php'; ?>

	<!-- //////////////////////////////////////////////////////////// -->

	<div class="art-breadcrumbs">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="breadcrumbs-content">
						<div class="image-box breadcrumb-image">
							<img src="assets/images/banner-03.jpg" alt="Banner">
						</div>
					</div>				
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="breadcrumbs-content">
						<div class="title-box-2 breadcrumb-title">
							<h1 class="title">
								<i class="fas fa-hand-holding-water icon"></i>
								<span>Công trình</span>
							</h1>

							<ul class="breadcrumb-box">
								<li>
									<a href="index.php" title="Trang chủ"><i class="fas fa-home icon"></i> Trang chủ</a>
								</li>
								<li>
									<span>Công trình</span>
								</li>
							</ul>
						</div>
						<!-- <div class="content-box content-breadcrumb">
							
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div> <!--breadcrumbs-->

	<!-- //////////////////////////////////////////////////////////// -->

	<main class="main-page">
		<div class="main-container">
			<div class="main-content">

				<article class="art-posts" style="padding-top: 90px;">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box projects-list">
									<div class="contents-box posts-content">
										<div class="contents groups-box">	

											<?php include 'templates/addons/construction-box.php'; ?>

										</div>
									</div>

									<?php include 'templates/paginations-box.php'; ?>
								</div>
							</div>
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