<!DOCTYPE html>
<html>

<head>

	<title>GCO Web</title>
	
	<?php include 'templates/head.php'; ?>

</head>

<body>

	<?php include 'templates/header.php'; ?>

	<main class="main-site main-page page-gio-hang">		

		<article class="lth-breadcrumbs d-none">
		    <div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module__breadcrumbs">
		                    <div class="module__content">
		                        <div class="content">
	                                <div class="content-box">
	                                    <div class="title-box">											
											<h2 class="title">
												GCO Web				
											</h2>
										</div>
	                                </div>
	                            </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-hosting-price">
		    <div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module_hosting_price">
		                    <div class="module_title">
		                    	<h1 class="title">Bảng giá Hosting</h1>
		                    </div>

		                    <div class="module_tab_title">
		                		<ul>
		                			<li>
		                				<a href="#" title="Hosting" class="active" data_tab="tab-1">Hosting</a>
		                			</li>
		                			<li>
		                				<a href="#" title="VPS" class="" data_tab="tab-2">VPS</a>
		                			</li>
		                			<li>
		                				<a href="#" title="SSL" class="" data_tab="tab-3">SSL</a>
		                			</li>
		                			<li>
		                				<a href="#" title="Email Hosting" class="" data_tab="tab-4">Email Hosting</a>
		                			</li>
		                		</ul>
		                	</div>

		                    <div class="module_content module_tab_content">
		                		<div class="tab-panel tab-1 active">
			                		<div class="groups-box">
			                			<?php include 'templates/addons/hosting-price-box.php'; ?>
			                		</div>
		                		</div>

		                		<div class="tab-panel tab-2">
			                		<div class="groups-box">
			                			<?php include 'templates/addons/hosting-price-box.php'; ?>
			                		</div>
		                		</div>

		                		<div class="tab-panel tab-3">
			                		<div class="groups-box">
			                			<?php include 'templates/addons/hosting-price-box.php'; ?>
			                		</div>
		                		</div>

		                		<div class="tab-panel tab-4">
			                		<div class="groups-box">
			                			<?php include 'templates/addons/hosting-price-box.php'; ?>
			                		</div>
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