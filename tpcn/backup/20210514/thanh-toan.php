<!DOCTYPE html>
<html>

<head>

	<title>Thanh toán</title>
	
	<?php include 'templates/head.php'; ?>

</head>

<body>

	<?php include 'templates/header.php'; ?>

	<main class="main-site main-page main-single main-product-single">		

		<article class="lth-breadcrumbs">
		    <div class="module_image">
			    <div class="container-fuild">
			    	<div class="row">
			            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			                <div class="module module_breadcrumbs">
		                        <div class="image">
		                        	<img src="assets/images/breadcrumb-06.jpg" alt="Image">
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
										Thanh toán
									</h1>

									<h2 class="title">
										Thanh toán			
									</h2>
								</div>
							</div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-pay">
			<div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="module module_pay">
							<form class="">
								<label>Nhập thông tin</label>
								<div class="form-content">
									<div class="form-group">
										<input class="form-control" type="text" name="Name" placeholder="Họ và tên">
										<span class="fr-error">Lỗi</span>
									</div>	
									<div class="groups-box">
										<div class="form-group">
											<input class="form-control" type="text" name="Email" placeholder="Email">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<input class="form-control" type="text" name="Phone" placeholder="Số điện thoại">
											<span class="fr-error">Lỗi</span>
										</div>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" name="Address" placeholder="Địa chỉ">
										<span class="fr-error">Lỗi</span>
									</div>	
									<div class="form-group">
										<div class="form-group">
											<select class="form-control">
												<option>Tỉnh thành</option>
												<option>Hà Nội</option>
												<option>Tp Hồ Chí Minh</option>
											</select>
										</div>

										<div class="form-group">
											<select class="form-control">
												<option>Quận huyện</option>
												<option>Hà Nội</option>
												<option>Tp Hồ Chí Minh</option>
											</select>
										</div>
									</div>
								</div>

								<label>Phương thức vận chuyển</label>
								<div class="form-content">
									<div class="groups-box">
										<div class="form-group">
											<select class="form-control">
												<option>Tỉnh thành</option>
												<option>Hà Nội</option>
												<option>Tp Hồ Chí Minh</option>
											</select>
										</div>
									</div>

									<div class="form-group">
										<div class="form-button">
											<a href="gio-hang.php" title="" class="btn btn-back">Quay lại</a>
											<a href="thanh-toan-2.php" title="" class="btn">Thanh toán</a>
										</div>
									</div>	
								</div>
							</form>
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