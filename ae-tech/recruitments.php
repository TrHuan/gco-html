<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-recruitments">

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
									<span>Tuyển dụng</span>
								</h1>
							</div>
							<div class="content-box content-breadcrumb">
								<ul class="breadcrumb-box">
									<li>
										<a href="index.php" title="Trang chủ">Trang chủ</a>
									</li>
									<li>
										<span>Tuyển dụng</span>
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

				<article class="art-searchs">
					<div class="container">
						<div class="row">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<?php include 'templates/addons/searchs.php'; ?>
							</div>
						</div>
					</div>
				</article>

				<article class="art-recruitments">
					<div class="container">
						<div class="row">
							<?php include 'templates/addons/recruitments.php'; ?>
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