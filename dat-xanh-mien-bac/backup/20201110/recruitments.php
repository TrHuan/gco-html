<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-recruitments">

	<?php include 'templates/header.php'; ?>

	<!-- //////////////////////////////////////////////////////////// -->

	<div class="art-breadcrumbs art-breadcrumbs-home" style="display: none;">
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
						<div class="title-box title-breadcrumb">
							<h1 class="title">Trang chủ</h1>
						</div>
						<div class="content-box content-breadcrumb">
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
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="slidershow-box">
									<div class="slidershow-content">
										<div class="slick-slider slick-slidershow">
											<div class="item">
												<div class="slider-box">
													<div class="slider-image">
														<img src="assets/images/slide-03.jpg" alt="Slider">
													</div>
												</div>
											</div>
											<div class="item">
												<div class="slider-box">
													<div class="slider-image">
														<img src="assets/images/slide-01.jpg" alt="Slider">
													</div>
												</div>
											</div>
											<div class="item">
												<div class="slider-box">
													<div class="slider-image">
														<img src="assets/images/slide-03.jpg" alt="Slider">
													</div>
												</div>
											</div>
											<div class="item">
												<div class="slider-box">
													<div class="slider-image">
														<img src="assets/images/slide-01.jpg" alt="Slider">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-posts art-recruitments">
					<div class="container">
						<div class="row">
							<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
								<div class="posts-box blogs-box">
									<div class="title-box posts-title">
										<h3 class="title">Hoang Son corp tuyển dụng năm 2020</h3>
									</div>

									<div class="content-box posts-content">
										<div class="contents blogs-list">
											<?php include 'templates/addons/recruitment-box.php'; ?>
										</div>
										
										<?php include 'templates/paginations-box.php'; ?>
									</div>
								</div>
							</div>

							<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
								<aside class="att-sidebars">
									<div class="sidebars-box">
										<div class="sidebars-content">
											<?php include 'templates/sidebars/sidebar-recruitments.php'; ?>
										</div>
									</div>
								</aside>
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