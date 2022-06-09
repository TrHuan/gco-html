<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-product-detail">

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
									<span>Chi tiết sản phẩm</span>
								</h1>
							</div>
							<div class="content-box content-breadcrumb">
								<ul class="breadcrumb-box">
									<li>
										<a href="index.php" title="Trang chủ">Trang chủ</a>
									</li>
									<li>
										<a href="products.php" title="Sản phẩm">Sản phẩm</a>
									</li>
									<li>
										<span>Chi tiết sản phẩm</span>
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

				<article class="art-post-detail art-product-detail">
					<div class="container">
						<div class="row">
							<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
								<div class="product-detail-box">									
									<div class="product-detail-images">
										<div class="slick-slider slick-product-detail">
											<div class="item">
												<div class="image">
													<img src="assets/images/pr-01.jpg" alt="Product">
												</div>
											</div>
											<div class="item">
												<div class="image">
													<img src="assets/images/pr-01.jpg" alt="Product">
												</div>
											</div>
										</div>
									</div>

									<div class="product-detail-contents">
										<h2 class="product-name">Lorem ipsum</h2>
										<div class="product-prices">
											<div class="price">
												<span>250.000</span>
											</div>
										</div>
										<div class="product-excerpt">
											<p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
										</div>
									</div>
								</div>

								<div class="post-detail-box">
									<div class="contents-box post-detail-contents">
										<div class="title-tab">
											<ul class="tab-product-detail">
												<li>
													<a href="#" class="btn tab-title-1 active">Mô tả sản phẩm</a>
												</li>
												<li>
													<a href="#" class="btn tab-title-2">Thông tin chi tiết</a>
												</li>
											</ul>
										</div>

										<div class="content-tab tab-product-detail">
											<div class="tab-content tab-content-1 active">
												<div class="contents">
													<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

													<ul>
														<li>Justo duo dolores et ea rebum</li>
														<li>Duis autem vel eum iriure dolor</li>
														<li>Stet clita kasd gubergren</li>
													</ul>

													<p>In hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait.</p>
												</div>
											</div>

											<div class="tab-content tab-content-2">
												<div class="contents">
													<div class="product-details">
														<ul>
															<li>
																<label>Thương hiệu</label>
																<span>Lorem ipsum</span>
															</li>
															<li>
																<label>Xuất xứ</label>
																<span>Lorem ipsum</span>
															</li>
															<li>
																<label>Lorem ipsum</label>
																<span>Lorem ipsum</span>
															</li>
															<li>
																<label>Lorem ipsum</label>
																<span>Lorem ipsum</span>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>

										<div class="content-footer groups-box">
											<label>Chia sẻ bài viết: </label>
											<ul>
												<li>
													<?php include 'templates/fb-share.php'; ?>
												</li>
												<li>
													<?php include 'templates/fb-like.php'; ?>
												</li>
											</ul>
										</div>
									</div>

									<?php //include 'templates/fb-comments.php'; ?>
									<div class="art-comments">
										<div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5" data-width="870"></div>

										<div id="fb-root"></div>
										<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=897190940472200&autoLogAppEvents=1" nonce="KKXi8B1J"></script>
									</div>
								</div>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
								<aside class="sidebars">
									<div class="sidebars-box">
										<div class="sidebars-content">
											<?php
												include 'templates/sidebars/sidebar-searchs.php';
												include 'templates/sidebars/sidebar-products-common.php';
											?>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</article>	

				<article class="art-products-other">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="products-other-box">
									<div class="title-box products-other-title">
										<h3 class="title">Sản phẩm khác</h3>
									</div>

									<div class="contents-box products-other-contents">
										<div class="slick-slider slick-products-other">
											
											<div class="item">
												<div class="product-other-box">
													<div class="product-other-image">
														<div class="image">
															<a href="product-other-detail.php" title="product-other">
																<img src="assets/images/rec-01.jpg" alt="product-other">
															</a>
														</div>
													</div>

													<div class="product-other-content">
														<h4 class="product-other-name">
															<a href="product-other-detail.php" title="product-other">Lorem ipsum</a>
														</h4>
													</div>
												</div>
											</div>
											
											<div class="item">
												<div class="product-other-box">
													<div class="product-other-image">
														<div class="image">
															<a href="product-other-detail.php" title="product-other">
																<img src="assets/images/rec-01.jpg" alt="product-other">
															</a>
														</div>
													</div>

													<div class="product-other-content">
														<h4 class="product-other-name">
															<a href="product-other-detail.php" title="product-other">Lorem ipsum</a>
														</h4>
													</div>
												</div>
											</div>
											
											<div class="item">
												<div class="product-other-box">
													<div class="product-other-image">
														<div class="image">
															<a href="product-other-detail.php" title="product-other">
																<img src="assets/images/rec-01.jpg" alt="product-other">
															</a>
														</div>
													</div>

													<div class="product-other-content">
														<h4 class="product-other-name">
															<a href="product-other-detail.php" title="product-other">Lorem ipsum</a>
														</h4>
													</div>
												</div>
											</div>
											
											<div class="item">
												<div class="product-other-box">
													<div class="product-other-image">
														<div class="image">
															<a href="product-other-detail.php" title="product-other">
																<img src="assets/images/rec-01.jpg" alt="product-other">
															</a>
														</div>
													</div>

													<div class="product-other-content">
														<h4 class="product-other-name">
															<a href="product-other-detail.php" title="product-other">Lorem ipsum</a>
														</h4>
													</div>
												</div>
											</div>
											
											<div class="item">
												<div class="product-other-box">
													<div class="product-other-image">
														<div class="image">
															<a href="product-other-detail.php" title="product-other">
																<img src="assets/images/rec-01.jpg" alt="product-other">
															</a>
														</div>
													</div>

													<div class="product-other-content">
														<h4 class="product-other-name">
															<a href="product-other-detail.php" title="product-other">Lorem ipsum</a>
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