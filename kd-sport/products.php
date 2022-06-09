<?php include 'templates/header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<div class="art-breadcrumbs art-breadcrumbs-page">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="assets/images/bg-breadcrumb.jpg" alt="Breadcrumb">
					</div>
				</div>				
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="content-box content-breadcrumb">
						<ul class="breadcrumb-box">
							<li>
								<a href="index.php" title="Trang chủ">Trang chủ</a>
							</li>
							<li>
								<span>Sản phẩm</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site products-site">
	<div class="main-container">
		
		<article class="art-products">
			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
						<aside class="att-sidebars">
							<div class="sidebars-box">
								<div class="sidebars-content">
									<article class="sidebar-box art-sidebar-categories">
										<div class="sidebar-categories-box">
											<div class="title-box title-sidebar-categories title-sidebar">
												<h3 class="title"><span>Danh mục sản phẩm</span></h3>
											</div>

											<div class="content-sidebar sidebar-categories-content">
												<ul>
													<li>
														<a href="products.php" class="sub-title">
															Knit Products
															<span>
																<i class="fal fa-plus icon"></i>
																<i class="fal fa-minus icon icon-minus"></i>
															</span>
														</a>
														<ul class="sub-menu">
															<li>
																<a href="products.php">
																	Knit Products 2
																</a>
															</li>
															<li>
																<a href="products.php">
																	Knit Products 2
																</a>
															</li>
															<li>
																<a href="products.php">
																	Knit Products 2
																</a>
															</li>
														</ul>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php" class="sub-title">
															Knit Products
															<span>
																<i class="fal fa-plus icon"></i>
																<i class="fal fa-minus icon icon-minus"></i>
															</span>
														</a>
														<ul class="sub-menu">
															<li>
																<a href="products.php">
																	Knit Products 2
																</a>
															</li>
															<li>
																<a href="products.php">
																	Knit Products 2
																</a>
															</li>
															<li>
																<a href="products.php">
																	Knit Products 2
																</a>
															</li>
														</ul>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
													<li>
														<a href="products.php">
															Knit Products
														</a>
													</li>
												</ul>
											</div>
										</div>
									</article>

									<article class="sidebar-box art-sidebar-products">
										<div class="sidebar-products-box">
											<div class="title-box title-sidebar-products title-sidebar">
												<h3 class="title"><span>Sản phẩm nổi bật</span></h3>
											</div>

											<div class="content-sidebar sidebar-products-content">
												<div class="slick-slider slick-sidebar-products">
													<?php include 'templates/products.php'; ?>
												</div>
											</div>
										</div>
									</article>
								</div>
							</div>
						</aside>
					</div>

					<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
						<div class="products-box shop-box">
							<div class="products-content shop-content">
								<?php include 'templates/products.php'; ?>
							</div>

							<div class="paginations-box">
								<ul>
									<li class="pagi-prev d-none">
										<a href="#">
											<i class="fal fa-angle-left icon"></i>
											<!-- <span>Prev</span> -->
										</a>
									</li>
									<li class="active">
										<a href="#">
											<span>1</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>2</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>...</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>4</span>
										</a>
									</li>
									<li>
										<a href="#">
											<span>5</span>
										</a>
									</li>
									<li class="pagi-next">
										<a href="#">
											<!-- <span>Next</span> -->
											<i class="fal fa-angle-right icon"></i>
										</a>
									</li>
								</ul>								
							</div>
						</div>
					</div>
				</div>
			</div>
		</article> <!-- art-products -->

	</div>
</main> <!-- main-site -->

<!-- //////////////////////////////////////////////////////////// -->

<?php include 'templates/footer.php'; ?>