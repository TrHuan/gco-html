<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-home">

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
						<div class="title-box breadcrumb-title">
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
									<div class="contents-box slidershow-content">
										<div class="slick-slider slick-slidershow">

											<div class="item">
												<div class="slider-box">
													 <div class="slider-image">
													 	<div class="image">
													 		<img src="assets/images/banner-01.jpg" alt="Slider">
													 	</div>
													 </div>
												</div>
											</div>

											<div class="item">
												<div class="slider-box">
													 <div class="slider-image">
													 	<div class="image">
													 		<img src="assets/images/banner-01.jpg" alt="Slider">
													 	</div>
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

				<article class="art-products" style="padding-top: 90px;">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="products-box">
									<div class="title-box-2 products-title">
										<h3 class="title">
											<i class="fas fa-hand-holding-water icon"></i>
											<span>Sản phẩm nổi bật</span>
										</h3>
										<a href="products-2.php" title="Xem tất cả">Xem tất cả <i class="fal fa-angle-double-right icon"></i></a>
									</div>

									<div class="contents-box products-content">
										<!-- <div class="contents groups-box">			 -->
											<div class="slick-slider slick-products">									
												<?php include 'templates/addons/product-box-01.php'; ?>
											</div>
										<!-- </div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-products">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="products-box">
									<div class="title-box-2 products-title">
										<h3 class="title">
											<i class="fas fa-hand-holding-water icon"></i>
											<span>Máy lọc nước</span>
										</h3>
										<a href="products-2.php" title="Xem tất cả">Xem tất cả <i class="fal fa-angle-double-right icon"></i></a>
									</div>

									<div class="contents-box products-content">
										<div class="contents groups-box">											
											<?php include 'templates/addons/product-box-02.php'; ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-products" style="padding-bottom: 90px;">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="products-box">
									<div class="title-box-2 products-title">
										<h3 class="title">
											<i class="fas fa-hand-holding-water icon"></i>
											<span>Thiết bị xử lý nước</span>
										</h3>
										<a href="products-2.php" title="Xem tất cả">Xem tất cả <i class="fal fa-angle-double-right icon"></i></a>
									</div>

									<div class="contents-box products-content">
										<div class="contents groups-box">											
											<?php include 'templates/addons/product-box-03.php'; ?>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-banners">
					<div class="container-fluid">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="contents-box banners-content">
										<div class="contents">
											<div class="item">
												<div class="banner-box">
													 <div class="banner-image">
													 	<div class="image">
													 		<img src="assets/images/banner-02.jpg" alt="Banner">
													 	</div>
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

				<article class="art-posts">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="title-box-2 posts-title">
										<h3 class="title">
											<i class="fas fa-hand-holding-water icon"></i>
											<span>Tin tức</span>
										</h3>
										<a href="blogs.php" title="Xem tất cả">Xem tất cả <i class="fal fa-angle-double-right icon"></i></a>
									</div>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="contents-box posts-content">
										<div class="contents">
											<div class="item">
												<div class="post-box">
													<div class="post-image">
														<div class="image">
															<a href="blog-detail.php" title="post">
																<img src="assets/images/post-01.jpg" alt="post">
															</a>
														</div>
													</div>
													<div class="post-content">
														<div class="post-date">
															<i class="fas fa-calendar-day icon"></i>
															<span>Ngày đăng: 30/09/2020</span>
														</div>
														<h4 class="post-name">
															<a href="blog-detail.php" title="post">
																Giá của thiết bị lọc nước giếng khoan gia đình
															</a>
														</h4>
														<div class="post-excerpt">
															<p>Nước giếng khoan là nguồn nước sinh hoạt chính của nhiều gia đình hiện nay, đặc biệt là các gia đình thuộc vùng nông thôn miền quê. Trước tình trạng nước giếng khoan ngày càng ô nhiễm như hiện nay, lắp đặt một máy lọc nước giếng khoan gia đình là giải pháp an toàn và...</p>
														</div>
														<div class="post-button">
															<a href="blog-detail.php" title="Xem chi tiết" class="btn">Xem chi tiết</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="contents-box posts-content">
										<div class="contents groups-box">

											<div class="item">
												<div class="post-box">
													<div class="post-image">
														<div class="image">
															<a href="blog-detail.php" title="post">
																<img src="assets/images/post-01.jpg" alt="post">
															</a>
														</div>
													</div>
													<div class="post-content">
														<div class="post-date">
															<i class="fas fa-calendar-day icon"></i>
															<span>Ngày đăng: 30/09/2020</span>
														</div>
														<h4 class="post-name">
															<a href="blog-detail.php" title="post">
																Nguyên nhân và biện pháp khắc phục hiệu ứng nhà kính
															</a>
														</h4>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="post-box">
													<div class="post-image">
														<div class="image">
															<a href="blog-detail.php" title="post">
																<img src="assets/images/post-01.jpg" alt="post">
															</a>
														</div>
													</div>
													<div class="post-content">
														<div class="post-date">
															<i class="fas fa-calendar-day icon"></i>
															<span>Ngày đăng: 30/09/2020</span>
														</div>
														<h4 class="post-name">
															<a href="blog-detail.php" title="post">
																Chất lượng nước sinh hoạt: Vấn đề đáng quan tâm hàng đầu
															</a>
														</h4>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="post-box">
													<div class="post-image">
														<div class="image">
															<a href="blog-detail.php" title="post">
																<img src="assets/images/post-01.jpg" alt="post">
															</a>
														</div>
													</div>
													<div class="post-content">
														<div class="post-date">
															<i class="fas fa-calendar-day icon"></i>
															<span>Ngày đăng: 30/09/2020</span>
														</div>
														<h4 class="post-name">
															<a href="blog-detail.php" title="post">
																Nguyên Lý Hoat Động Của Công NGhệ Thẩm Thấu Ngược 
															</a>
														</h4>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="post-box">
													<div class="post-image">
														<div class="image">
															<a href="blog-detail.php" title="post">
																<img src="assets/images/post-01.jpg" alt="post">
															</a>
														</div>
													</div>
													<div class="post-content">
														<div class="post-date">
															<i class="fas fa-calendar-day icon"></i>
															<span>Ngày đăng: 30/09/2020</span>
														</div>
														<h4 class="post-name">
															<a href="blog-detail.php" title="post">
																4 Giải pháp xử lý nước thải tiên tiến nhất hiện nay
															</a>
														</h4>
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

			</div>
		</div>
	</main> <!-- main-site -->

	<!-- //////////////////////////////////////////////////////////// -->

	<?php include 'templates/footer.php'; ?>

</body>
</html>