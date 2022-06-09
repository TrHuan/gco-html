<!DOCTYPE html>
<html>

<head>

	<title>Minh Quý Glass</title>
	
	<?php include 'templates/head.php'; ?>

</head>

<body>

	<?php include 'templates/header.php'; ?>

	<main class="main-site main-page main-projects">		

		<article class="lth-breadcrumbs">
			<div class="module_breadcrumbs_image">
                <div class="module_image">
                	<div class="image">
                		<img src="assets/images/br-07.jpg" alt="Image">
                	</div>
                </div>

                <div class="module_title">	
					<h1 class="title">
						Công trình - dự án			
					</h1>
				</div>
			</div>

		    <div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module_breadcrumbs">
		                    <div class="module_content">
		                    	<ul>
		                    		<li>
		                    			<a href="index.php" title="Trang chủ">Trang chủ</a>
		                    		</li>
		                    		<li>
		                    			<span>Công trình - dự án</span>
		                    		</li>
		                    	</ul>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-projects lth-projects-list">
		    <div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module_projects module_projects_list">
		                	<div class="module_title">
		                		<p class="infor">Dưới đây là những dự án mà Minh Quý Glass đã và đang tham gia triển khai thi công </p>
		                	</div>

		                	<div class="module_content">
		                		<div class="groups-box">
		                			<?php include 'templates/addons/project-box-2.php'; ?>
		                		</div>
		                	</div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>
		
	</main>

	<?php include 'templates/footer.php'; ?>

	<?php include 'templates/script.php'; ?>

</body>
</html>