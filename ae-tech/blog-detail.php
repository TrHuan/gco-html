<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-blog-detail">

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
									<span>Tin tức chi tiết</span>
								</h1>
							</div>
							<div class="content-box content-breadcrumb">
								<ul class="breadcrumb-box">
									<li>
										<a href="index.php" title="Trang chủ">Trang chủ</a>
									</li>
									<li>
										<a href="blogs.php" title="Tin tức">Tin tức</a>
									</li>
									<li>
										<span>Tin tức chi tiết</span>
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

				<article class="art-post-detail art-blog-detail">
					<div class="container">
						<div class="row">
							<div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
								<div class="post-detail-box">
									<div class="title-box post-detail-title">
										<h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
										<div class="post-day">
											<label>30</label>
											<span>Th 11</span>
										</div>
										<div class="post-excerpt">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
										</div>
									</div>

									<div class="contents-box post-detail-contents">
										<div class="contents">
											<img src="assets/images/ps-d-01.jpg" alt="Post">

											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

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
									</div>

									<?php include 'templates/fb-comments.php'; ?>
								</div>
							</div>

							<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
								<aside class="sidebars">
									<div class="sidebars-box">
										<div class="sidebars-content">
											<?php include 'templates/sidebars/sidebar-blogs.php'; ?>
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