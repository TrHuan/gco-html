<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-blogs">

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
									<span>Tin tức</span>
								</h1>
							</div>
							<div class="content-box content-breadcrumb">
								<ul class="breadcrumb-box">
									<li>
										<a href="index.php" title="Trang chủ">Trang chủ</a>
									</li>
									<li>
										<span>Tin tức</span>
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

				<article class="art-searchs art-blogs-searchs">
					<div class="container">
						<div class="row">
							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<?php include 'templates/addons/searchs-2.php'; ?>
							</div>

							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
								<div class="posts-number-show-box">
									<div class="contents-box posts-number-show-contents">
										<div class="contents groups-box">
											<label>Hiển thị: </label>
											<select class="form-control">
												<option>11 tin</option>
												<option>20 tin</option>
												<option>30 tin</option>
												<option>40 tin</option>
											</select>
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
							<?php include 'templates/addons/posts-2.php'; ?>
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