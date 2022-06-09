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
														<img src="assets/images/slide-01.jpg" alt="Slider">
													</div>
												</div>
											</div>
											<div class="item">
												<div class="slider-box">
													<div class="slider-image">
														<img src="assets/images/slide-02.jpg" alt="Slider">
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
														<img src="assets/images/slide-02.jpg" alt="Slider">
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

				<article class="art-banners art-introduces">					
					<div class="container">
						<div class="row">
							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="banners-image">
										<div class="image">
											<iframe width="545" height="310" src="https://www.youtube.com/embed/QpbdsfJG3ZA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="banners-content">
										<div class="title-box banners-title">
											<h3 class="title">Giới thiệu</h3>
										</div>

										<div class="contents">
											<p>Today science and technological progress is developing day by day. Automation and the smart house system is an astonishing example of the achievement of this evolution. This system provides the house's advanced design to create the most comfortable living conditions. It would be best to build a qualitative digital profile to show people the remote activation of all these functions. The best way to create a website is to use a smart home website template.</p>
											<div class="button">
												<a href="#" title="Banner" class="btn btn-see-more">Xem thêm</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-banners art-searchs">					
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="title-box title-banners">
										<div class="title-tab">
											<ul class="tab-projects">
												<li>
													<a href="#" title="Tab" class="tab-title-1 active">
														<span>Dự án bán</span>
													</a>
												</li>
												<li>
													<a href="#" title="Tab" class="tab-title-2">
														<span>Dự án cho thuê</span>
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div class="banners-content tab-projects">
										<div class="tab-content tab-content-1 active">
											<div class="banner-box">
												<div class="banner-content">
													<?php include 'templates/addons/project-search.php'; ?>
												</div>
											</div>
										</div>

										<div class="tab-content tab-content-2">
											<div class="banner-box">
												<div class="banner-content">
													<?php include 'templates/addons/project-search.php'; ?>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-posts art-blogs">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="title-box posts-title">
										<h3 class="title">Tin thị trường</h3>
									</div>
								</div>

								<div class="content-box posts-content">
									<div class="contents groups-box">
										<?php include 'templates/addons/post-box.php'; ?>
									</div>
									<div class="button">
										<a href="#" title="Xem thêm" class="btn">Xem thêm</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-posts art-posts-2 art-hot-events">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="title-box posts-title">
										<h3 class="title">Sự kiện nóng cuối tuần</h3>
									</div>
								</div>

								<div class="content-box posts-content">
									<div class="slick-slider slick-hot-events">
										<?php include 'templates/addons/post-box.php'; ?>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-posts art-posts-2 art-projects-highlights">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="title-box posts-title">
										<h3 class="title">Dự án nổi bật</h3>
									</div>
								</div>

								<div class="content-box posts-content">
									<div class="slick-slider slick-projects-highlights">
										<?php include 'templates/addons/post-box.php'; ?>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-posts art-posts-2 art-projects-other">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="title-box posts-title">
										<h3 class="title">Dự án bất động sản khác</h3>
									</div>
								</div>

								<div class="content-box posts-content">
									<div class="contents groups-box">
										<?php include 'templates/addons/projects-other.php'; ?>
									</div>
									<div class="button">
										<a href="#" title="Xem thêm" class="btn">Xem thêm</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-posts art-posts-2 art-projects-highlights">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="posts-box">
									<div class="title-box posts-title">
										<h3 class="title">Dự án sắp mở bán</h3>
									</div>
								</div>

								<div class="content-box posts-content">
									<div class="slick-slider slick-projects-highlights">
										<?php include 'templates/addons/post-box.php'; ?>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-banners art-projects-rental">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="title-box banners-title">
										<h3 class="title">Dự án cho thuê</h3>
									</div>
								</div>
							</div>

							<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="content-box banners-content">
										<div class="contents">
											<div class="item">
												<div class="banner-box">
													<div class="banner-image">
														<div class="image">
															<img src="assets/images/banner-01.jpg" alt="banners">
														</div>
													</div>
													<div class="banner-content">
														<a href="#" title="banners">Văn phòng</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="content-box banners-content">
										<div class="contents">
											<div class="item">
												<div class="banner-box">
													<div class="banner-image">
														<div class="image">
															<img src="assets/images/banner-02.jpg" alt="banners">
														</div>
													</div>
													<div class="banner-content">
														<a href="#" title="banners">Chung cư</a>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="banner-box">
													<div class="banner-image">
														<div class="image">
															<img src="assets/images/banner-03.jpg" alt="banners">
														</div>
													</div>
													<div class="banner-content">
														<a href="#" title="banners">Thương mại</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="content-box banners-content">
										<div class="contents">
											<div class="item">
												<div class="banner-box">
													<div class="banner-image">
														<div class="image">
															<img src="assets/images/banner-04.jpg" alt="banners">
														</div>
													</div>
													<div class="banner-content">
														<a href="#" title="banners">Nhà phố</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="button">
									<a href="#" title="Banner" class="btn btn-see-more">Xem thêm</a>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-projects art-projects-onsale">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="projects-box">
									<div class="title-box projects-title">
										<h3 class="title">Dự án đang bán</h3>
									</div>

									<div class="content-box projects-content">
										<div class="contents groups-box">

											<div class="item">
												<div class="project-box">
													<div class="project-image">
														<div class="image">
															<img src="assets/images/post-01.jpg" alt="project">
														</div>
													</div>
													<div class="project-content">
														<h4 class="project-name">
															<a href="#" title="project">Dự án miền Bắc</a>
														</h4>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="project-box">
													<div class="project-image">
														<div class="image">
															<img src="assets/images/post-02.jpg" alt="project">
														</div>
													</div>
													<div class="project-content">
														<h4 class="project-name">
															<a href="#" title="project">Dự án miền Trung</a>
														</h4>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="project-box">
													<div class="project-image">
														<div class="image">
															<img src="assets/images/post-03.jpg" alt="project">
														</div>
													</div>
													<div class="project-content">
														<h4 class="project-name">
															<a href="#" title="project">Dự án miền Nam</a>
														</h4>
													</div>
												</div>
											</div>

										</div>

										<div class="button">
											<a href="#" title="Banner" class="btn btn-see-more">Xem thêm</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-banners art-blogs-categories">
					<div class="container-fluid">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="title-box banners-title">
										<h3 class="title">Tin tức tư vấn</h3>
									</div>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="banners-box">
									<div class="content-box banners-content">
										<div class="contents">
											<div class="item">
												<div class="banner-box">
													<div class="banner-image">
														<div class="image">
															<img src="assets/images/banner-05.jpg" alt="banners">
														</div>
													</div>
													<div class="banner-content">
														<a href="#" title="banners">Tư vấn nội thất</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="banners-box box-2">
									<div class="content-box banners-content">
										<div class="contents">
											<div class="item">
												<div class="banner-box">
													<div class="banner-image">
														<div class="image">
															<img src="assets/images/banner-06.jpg" alt="banners">
														</div>
													</div>
													<div class="banner-content">
														<a href="#" title="banners">Tư vấn tài chính</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="button">
									<a href="#" title="Banner" class="btn btn-see-more">Xem thêm</a>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-testimonials">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="testimonials-box">
									<div class="title-box testimonials-title">
										<h3 class="title">Khách hàng nói về chúng tôi</h3>
									</div>
								</div>

								<div class="content-box testimonials-content">
									<div class="slick-slider slick-testimonials">

										<div class="item">
											<div class="testimonial-box">
												<div class="testimonial-image">
													<div class="image">
														<img src="assets/images/testimonial-01.jpg" alt="Testimonial">
													</div>
												</div>

												<div class="testimonial-content">
													<h4>Chu huyền Trang</h4>
													<p>Chủ nhân căn hộ P2-1210 Vincity Ocean Park, may mắn trúng giải “Trả lời ngay trúng liền tay”.</p>
													<div class="content">
														<p>Tôi không chỉ mua một căn mà là hai căn nhà qua Đất Xanh Miền Bắc vì rất hài lòng với thái độ làm việc chuyên nghiệp, tận tình với khách hàng của các chuyên viên. Nếu có cơ hội mua nhà lần nữa tôi chắc chắn sẽ vẫn lựa chọn ....</p>
													</div>
												</div>
											</div>
										</div>

										<div class="item">
											<div class="testimonial-box">
												<div class="testimonial-image">
													<div class="image">
														<img src="assets/images/testimonial-01.jpg" alt="Testimonial">
													</div>
												</div>

												<div class="testimonial-content">
													<h4>Chu huyền Trang</h4>
													<p>Chủ nhân căn hộ P2-1210 Vincity Ocean Park, may mắn trúng giải “Trả lời ngay trúng liền tay”.</p>
													<div class="content">
														<p>Tôi không chỉ mua một căn mà là hai căn nhà qua Đất Xanh Miền Bắc vì rất hài lòng với thái độ làm việc chuyên nghiệp, tận tình với khách hàng của các chuyên viên. Nếu có cơ hội mua nhà lần nữa tôi chắc chắn sẽ vẫn lựa chọn ....</p>
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

				<article class="art-brands">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="brands-box">
									<div class="title-box brands-title">
										<h3 class="title">Đối tác của chúng tôi</h3>
									</div>

									<div class="content-box brands-content">
										<div class="contents groups-box">

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-01.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-02.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-03.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-04.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-05.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-06.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-07.png" alt="Testimonial">
															</a>														
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="brand-box">
													<div class="brand-image">
														<div class="image">
															<a href="#" title="Brand">
																<img src="assets/images/brand-08.png" alt="Testimonial">
															</a>														
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

			</div>
		</div>
	</main> <!-- main-site -->

	<!-- //////////////////////////////////////////////////////////// -->

	<?php include 'templates/footer.php'; ?>

</body>
</html>