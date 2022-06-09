<!DOCTYPE html>
<html lang="VI">

<?php include 'templates/head.php'; ?>

<body class="body-site body-page body-recruitment-detail">

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
									<span>Chi tiết tuyển dụng</span>
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
										<span>Chi tiết tuyển dụng</span>
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

				<article class="art-post-detail art-recruitment-detail">
					<div class="container">
						<div class="row">
							<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
								<div class="post-detail-box">
									<div class="title-box post-detail-title">
										<h2 class="title">Lorem ipsum</h2>
										<div class="post-day">
											<span>05.11.2020</span>
										</div>
										<div class="post-excerpt">
											<p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo. </p>
										</div>
									</div>

									<div class="contents-box post-detail-contents">
										<div class="contents">
											<img src="assets/images/rec-d-01.jpg" alt="Post">

											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

											<ul>
												<li>Justo duo dolores et ea rebum</li>
												<li>Duis autem vel eum iriure dolor</li>
												<li>Stet clita kasd gubergren</li>
											</ul>

											<p>In hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait.</p>

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

							<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
								<aside class="sidebars">
									<div class="sidebars-box">
										<div class="sidebars-content">
											<?php
												include 'templates/sidebars/sidebar-searchs.php';
												include 'templates/sidebars/sidebar-recruitment-relate.php';
											?>
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