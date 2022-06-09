<!DOCTYPE html>
<html lang="VI">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Vuadecor</title>

	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

	<link href="assets/css/bootstrap.min.css" rel="stylesheet" />
	<link href="assets/css/mobilemenu.css" rel="stylesheet" />
	<link href="assets/css/slick.css" rel="stylesheet" />
	<link href="assets/css/all.fontawesome.min.css" rel="stylesheet" />
	<link href="assets/css/styles.min.css" rel="stylesheet" />

	<link href="assets/css/customs.css" rel="stylesheet" />
	<link href="assets/css/reponsive.css" rel="stylesheet" />

	<style type="text/css">
		
	</style>
</head>
<body class="page-body">
	<div class="body-main">
		<header class="headers">
			<div class="megamenu megamenu-mobile-content d-lg-none">
				<div class="modal menu-content">
					<!-- Modal content -->
					<div class="modal-content animated zoomIn">
						<div class="menu-close">
							<span class="close">×</span>
						</div>

						<div class="modal-body">
							<h3 class="title">Trang chủ</h3>

							<div class="searchs-box">
								<div class="searchs-content">
									<form class="form form-searchs">
										<div class="form-content">
											<div class="form-group">
												<input type="text" name="search" placeholder="Tìm kiếm...">
											</div>	

											<div class="form-group">
												<div class="button">
													<button class="btn">
														<i class="far fa-search icon"></i>
													</button>
												</div>
											</div>	
										</div>
									</form>
								</div>
							</div>

							<?php include 'nav-megamenu.php'; ?>
						</div>
					</div>
				</div>
			</div> <!-- megamenu-mobile -->

			<div class="header-stick">
				<?php include 'templates/header-main.php'; ?>
			</div> <!--header-stick-->

			<div class="header-top">
				<div class="container">
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<div class="top-left d-none d-lg-block">
								<div>
									<ul>
										<li>
											<img src="assets/images/truck-free.png" alt="Truck">
											<span>Đơn trên 500.000Đ</span>
										</li>
										<li>
											<img src="assets/images/phone.png" alt="Phone">
											<a href="tel:19001989">
												<span>1900 1989</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
							<div class="top-right">
								<div class="logos-box d-lg-none">
									<div class="logos-content">
										<a href="index.php" title="Logo">
											<img src="assets/images/logo.png" alt="Logo">
										</a>
									</div>
								</div>

								<div class="groups-box">
									<div class="accounts-box">
										<div class="accounts-title">
											<a href="#" class="btn">
												<i class="fas fa-user icon"></i>
											</a>
										</div>
										<!-- <div class="accounts-content">
											
										</div> -->
									</div>

									<div class="mini-carts-box">
										<div class="carts-title">
											<a href="#" class="btn">
												<i class="fas fa-shopping-cart icon"></i>
											</a>
											<span class="cart-plus">+</span>
										</div>
										<div class="carts-content">
											<div class="contents">
												<div class="content">
													<div class="item">
														<div class="product-box">
															<div class="product-image">
																<a href="product-details.php" title="Product">
																	<img src="assets/images/pr-01.jpg" alt="Product" style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;">
																</a>
															</div>
															<div class="product-content">
																<h4 class="product-name">
																	<a href="product-details.php" title="Product" class="product-link">Janus Table Lamp</a>
																</h4>
																<div class="product-prices">
																	<span class="price old">2.500.000<small>đ</small></span>
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="product-box">
															<div class="product-image">
																<a href="product-details.php" title="Product">
																	<img src="assets/images/pr-01.jpg" alt="Product" style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;">
																</a>
															</div>
															<div class="product-content">
																<h4 class="product-name">
																	<a href="product-details.php" title="Product" class="product-link">Janus Table Lamp</a>
																</h4>
																<div class="product-prices">
																	<span class="price old">2.500.000<small>đ</small></span>
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="product-box">
															<div class="product-image">
																<a href="product-details.php" title="Product">
																	<img src="assets/images/pr-01.jpg" alt="Product" style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;">
																</a>
															</div>
															<div class="product-content">
																<h4 class="product-name">
																	<a href="product-details.php" title="Product" class="product-link">Janus Table Lamp</a>
																</h4>
																<div class="product-prices">
																	<span class="price old">2.500.000<small>đ</small></span>
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="product-box">
															<div class="product-image">
																<a href="product-details.php" title="Product">
																	<img src="assets/images/pr-01.jpg" alt="Product" style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;">
																</a>
															</div>
															<div class="product-content">
																<h4 class="product-name">
																	<a href="product-details.php" title="Product" class="product-link">Janus Table Lamp</a>
																</h4>
																<div class="product-prices">
																	<span class="price old">2.500.000<small>đ</small></span>
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</div>
														</div>
													</div>
													<div class="item">
														<div class="product-box">
															<div class="product-image">
																<a href="product-details.php" title="Product">
																	<img src="assets/images/pr-01.jpg" alt="Product" style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;">
																</a>
															</div>
															<div class="product-content">
																<h4 class="product-name">
																	<a href="product-details.php" title="Product" class="product-link">Janus Table Lamp</a>
																</h4>
																<div class="product-prices">
																	<span class="price old">2.500.000<small>đ</small></span>
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="prices-total">
													<label>Tạm tính</label>
													<span class="price">1.500.000<small>đ</small></span>
												</div>
												<div class="button">
													<a href="carts.php" title="Xem giỏ hàng" class="btn">Xem giỏ hàng</a>
													<a href="pays.php" title="Xem giỏ hàng" class="btn">Thanh toán</a>
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

			<?php include 'templates/header-main.php'; ?>
		</header> <!--headers-->