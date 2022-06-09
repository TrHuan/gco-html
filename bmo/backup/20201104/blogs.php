<?php include 'templates/header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<!-- <div class="art-breadcrumbs art-breadcrumbs-page">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="assets/images/bg-breadcrumb-2.jpg" alt="Breadcrumb">
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
								<span>Tin tức</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> --> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site blogs-site">
	<div class="main-container">
		
		<article class="art-blogs">
			<div class="container">
				<div class="row">
					<div class="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
						<div class="blogs-box blogs-list">
							<div class="blogs-content blogs-list-content">
								<?php include 'templates/addons/blogs.php'; ?>
							</div>

							<?php include 'templates/paginations.php'; ?>
						</div>
					</div>

					<div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
						<aside class="art-sidebars">
							<div class="sidebars-box">
								<div class="sidebars-content">
									<?php include 'templates/addons/sidebar-blogs.php'; ?>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</article> <!-- art-blogs -->

	</div>
</main> <!-- main-site -->

<!-- //////////////////////////////////////////////////////////// -->

<?php include 'templates/footer.php'; ?>