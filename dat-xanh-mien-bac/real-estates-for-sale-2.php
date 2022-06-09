<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-real-estates-for-sale">

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

				<article class="art-posts art-real-estates-management art-real-estates-for-sale">
					<div class="container">
						<div class="row">
							<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
								<div class="posts-box blogs-box real-estates-for-sale-box">
									<div class="title-box posts-title">
										<h3 class="title">Danh sách bất động sản đang bán</h3>
										<p>Thị trường bán lẻ & ngành tiêu dùng phát triển mạnh mẽ, mặt bằng kinh doanh nào thực sự phù hợp nhãn hàng kinh doanh & thương hiệu của quý công ty. Liên hệ với chúng tôi để có giải pháp tối ưu.</p>
									</div>

									<div class="content-box posts-content">
										<div class="contents blogs-list">
											<?php include 'templates/addons/real-estates-for-sale-box.php'; ?>
										</div>
										
										<?php include 'templates/paginations-box.php'; ?>
									</div>
								</div>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
								<aside class="att-sidebars">
									<div class="sidebars-box">
										<div class="sidebars-content">

											<article class="art-banners art-sidebars-searchs">		
												<div class="banners-box">
													<div class="title-box title-banners">
														<h3 class="title">Bộ lọc</h3>
													</div>

													<div class="content-box banners-content">
														<?php include 'templates/addons/project-search.php'; ?>
													</div>
												</div>
											</article>

											<?php include 'templates/sidebars/sidebar-projects-onsale.php'; ?>

											<?php include 'templates/sidebars/sidebar-related-news.php'; ?>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</article>

				<article class="art-banners art-calculateds">
					<div class="container">
						<div class="row">
							<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="title-box title-banners">
										<h3 class="title">Tính lãi xuất</h3>
									</div>

									<div class="content-box banners-content">
										<?php include 'templates/addons/calculated-box.php'; ?>
									</div>
								</div>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
								<aside class="att-sidebars">
									<div class="sidebars-box">
										<div class="sidebars-content">
											<article class="art-banners">
												<div class="banners-box">
													<div class="content-box banners-content">
														<div class="contents">
															<div class="item">
																<div class="banner-box">
																	<div class="banner-image">
																		<div class="image">
																			<a href="#" title="Banner">
																				<img src="assets/images/banner-07.jpg" alt="Banner">
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</article>
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