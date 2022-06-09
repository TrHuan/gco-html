<!DOCTYPE html>
<html>

<head>

	<title>Tin tức</title>
	
	<?php include 'templates/head.php'; ?>

</head>

<body>

	<?php include 'templates/header.php'; ?>

	<main class="main-site main-page main-blogs">		

		<article class="lth-breadcrumbs">
		    <div class="module_image">
			    <div class="container-fuild">
			    	<div class="row">
			            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			                <div class="module module_breadcrumbs">
		                        <div class="image">
		                        	<img src="assets/images/breadcrumb-09.jpg" alt="Image">
	                        	</div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div class="module_content">
			    <div class="container">
			        <div class="row">
			            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			                <div class="module module__breadcrumbs">
			                    <div class="title-box">
									<h1 class="title d-none">
										Tin tức
									</h1>
									
									<h2 class="title">
										Tin tức				
									</h2>
								</div>
							</div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-blogs">
			<div class="container">
		        <div class="row">
		            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
		                <div class="module module_blogs module_blogs_list">
		                	<div class="module_content">
			                	<div class="groups-box">
		                            <?php include 'templates/addons/blog-box-2.php'; ?>
		                        </div>

	                            <?php include 'templates/pagination.php'; ?>
		                    </div>
						</div>
					</div>

					<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
		            	<?php include 'templates/sidebars/sidebars-2.php'; ?>
		            </div>
				</div>
			</div>
		</article>
		
	</main>

	<?php include 'templates/footer.php'; ?>

	<?php include 'templates/script.php'; ?>

</body>
</html>