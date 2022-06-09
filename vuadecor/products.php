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
					<!-- <div class="title-box title-breadcrumb">
						<h1 class="title">Sản phẩm</h1>
					</div> -->
				</div>				
			</div>
		</div>
	</div>

	<!-- <div class="container">
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
	</div> -->
</div> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site products-site">
	<div class="main-container">
		
		<article class="art-products">
			<div class="container">
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
						<aside class="art-sidebars">
							<div class="sidebars-btn">
								<i class="fa fa-cog fa-spin"></i>
							</div>

							<div class="sidebars-box">
								<div class="sidebars-content">
									<article class="sidebar-box art-product-prices">
										<div class="product-prices-box">
											<div class="title-box title-product-prices title-sidebar">
												<h3 class="title"><span>Khoảng giá</span></h3>
											</div>

											<div class="content-sidebar product-prices-content">
												<ul>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Tất cả
														</a>
													</li>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Nhỏ hơn 500.000đ
														</a>
													</li>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Từ 500.000đ - 1.000.000đ
														</a>
													</li>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Từ 1.000.000đ - 1.500.000đ
														</a>
													</li>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Từ 1.500.000đ - 2.000.000đ
														</a>
													</li>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Từ 2.000.000đ - 2.500.000đ
														</a>
													</li>
													<li>
														<input type="checkbox" name="" class="check-box">
														<span class="icon-check"></span>
														<a href="products.php">
															Lớn hơn 2.500.000đ
														</a>
													</li>
												</ul>
											</div>
										</div>
									</article>
								</div>
							</div>
						</aside>
					</div>

					<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
						<div class="products-box shop-box">
							<div class="products-top">
								<div class="title-box title-shop">
									<h1 class="title">Sofa</h1>
								</div>

								<div class="sort-box">
									<div class="title-sort">
										<label>Sắp xếp</label>
									</div>
									<div class="content-sort">
										<select>
											<option>Sản phẩm mới</option>
											<option>Sản phẩm bán chạy</option>
											<option>Giá tăng dần</option>
											<option>Giá giảm dần</option>
										</select>
									</div>
								</div>
							</div>

							<div class="products-content shop-content">
								<?php include 'templates/products-tab.php'; ?>
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
											<span>10</span>
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