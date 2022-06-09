<!DOCTYPE html>
<html>

<head>

	<title>Giỏ hàng</title>
	
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
		                        	<img src="assets/images/breadcrumb-05.jpg" alt="Image">
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
										Giỏ hàng
									</h1>
																
									<h2 class="title">
										Giỏ hàng			
									</h2>
								</div>
							</div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-cart">
			<div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="module module_products module_cart">
							<form>
								<div class="table">
									<table style="width:100%">
										<tr>
											<th>Sản phẩm</th>
											<th>Số lượng</th>
											<th>Đơn giá</th>
											<th>Thành tiền</th>
											<th class="trash">Thao tác</th>
										</tr>

										<tr>
											<td>
												<h4 class="content-name">
									                <a href="san-pham-chi-tiet.php" title="Thực phẩm bảo vệ sức khỏe tăng cường sinh lý nam Oyster Plus – Goodhealth (Chai 60 viên)">1. Thực phẩm bảo vệ sức khỏe tăng cường sinh lý nam Oyster Plus – Goodhealth (Chai 60 viên)</a>
									            </h4>
											</td>
											<td>
												<div class="content-qty">
									            	<span class="qty-minus">
									            		<i class="typo-icon typo-icon-minus-1 icon"></i>
									            	</span>

									            	<input type="text" name="number-qty" placeholder="1" value="1" class="form-control">

									            	<span class="qty-plus">
									            		<i class="typo-icon typo-icon-plus icon"></i>
									            	</span>
									            </div>
									        </td>
											<td>
												<div class="content-prices">
									                <p class="price">500.000VNĐ</p>
									            </div>
											</td>
											<td>
												<div class="content-prices">
									                <p class="price">500.000VNĐ</p>
									            </div>
											</td>
											<td class="trash">
												<a href="#" title="trash">
													<span class="typo-icon typo-icon-trash"></span>
												</a>
											</td>
										</tr>

										<tr>
											<td>
												<h4 class="content-name">
									                <a href="san-pham-chi-tiet.php" title="Thực phẩm bảo vệ sức khỏe tăng cường sinh lý nam Oyster Plus – Goodhealth (Chai 60 viên)">2. Thực phẩm bảo vệ sức khỏe tăng cường sinh lý nam Oyster Plus – Goodhealth (Chai 60 viên)</a>
									            </h4>
											</td>
											<td>
												<div class="content-qty">
									            	<span class="qty-minus">
									            		<i class="typo-icon typo-icon-minus-1 icon"></i>
									            	</span>

									            	<input type="text" name="number-qty" placeholder="1" value="1" class="form-control">

									            	<span class="qty-plus">
									            		<i class="typo-icon typo-icon-plus icon"></i>
									            	</span>
									            </div>
									        </td>
											<td>
												<div class="content-prices">
									                <p class="price">500.000VNĐ</p>
									            </div>
											</td>
											<td>
												<div class="content-prices">
									                <p class="price">500.000VNĐ</p>
									            </div>
											</td>
											<td class="trash">
												<a href="#" title="trash">
													<span class="typo-icon typo-icon-trash"></span>
												</a>
											</td>
										</tr>
									</table>
								</div>

								<div class="table-footer">
									<div class="discount-code">
										<label>Mã giảm giá</label>
										<input type="text" name="discount" placeholder="" value="" class="form-control">
									</div>

									<div class="buttons">
										<a href="index.php" title="" class="btn btn-continue">
											Tiếp tục mua hàng
										</a>
										<a href="thanh-toan.php" title="" class="btn">
											Thanh toán
										</a>
									</div>
								</div>
							</form>
						</div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-products lth-products-similar">
			<div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module_products">
		                	<div class="module_header title-box">
		                        <h3 class="title">Sản phẩm tương tự</h3>
		                    </div>

		                	<div class="slick-slider slick-products-2">
	                            <?php include 'templates/addons/product-box.php'; ?>
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