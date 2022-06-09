<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-products">

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
								<span>Tất cả sản phẩm</span>
							</h1>

							<ul class="breadcrumb-box">
								<li>
									<a href="index.php" title="Trang chủ"><i class="fas fa-home icon"></i> Trang chủ</a>
								</li>
								<li>
									<span>Sản phẩm</span>
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

				<article class="art-products" style="padding-top: 90px;">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="products-box">
									<div class="contents-box products-content">
										<div class="contents groups-box">											
											<?php include 'templates/addons/product-box-01.php'; ?>

											<?php include 'templates/addons/product-box-02.php'; ?>

											<?php //include 'templates/addons/product-box-03.php'; ?>
										</div>
									</div>

									<?php include 'templates/paginations-box.php'; ?>
								</div>
							</div>
						</div>
					</div>
				</article>

				<article class="art-products art-products-just-watched" style="padding-bottom: 90px;">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="products-box">
									<div class="title-box products-box">
										<h3 class="title">
											<i class="fas fa-hand-holding-water icon"></i>
											<span>Mới xem</span>
										</h3>
									</div>

									<div class="contents-box products-content">
										<!-- <div class="contents groups-box">			 -->
											<div class="slick-slider slick-products">									
												<?php include 'templates/addons/product-box-02.php'; ?>
											</div>
										<!-- </div> -->
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