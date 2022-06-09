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

		<article class="lth-carts">
		    <div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module_carts">
		                    <div class="module_title">
		                    	<h1 class="title">Giỏ hàng</h1>
		                    </div>

		                    <div class="module_content">
		                    	<div class="tables">
									<div class="table">
										<table style="width:100%">
											<tr>
												<th>STT</th>
												<th>Sản phẩm</th>
												<th>Giá</th>
												<th class="trash">Xóa</th>
											</tr>

											<tr>
												<td>
													<span>1</span>
												</td>
												<td>
										            <a href="san-pham-chi-tiet.php" title="Mẫu bán hàng 102">Mẫu bán hàng 102</a>
												</td>
												<td>
										            <p>0 đ</p>
												</td>
												<td class="trash">
													<a href="#" title="trash">
														<span class="icofont-close-line"></span>
													</a>
												</td>
											</tr>

											<tr>
												<td>
													<span>2</span>
												</td>
												<td>
										            <a href="san-pham-chi-tiet.php" title="Hosting 12 tháng gói Standard">Hosting 12 tháng gói Standard</a>
												</td>
												<td>
										            <p>2.800.000 đ</p>
												</td>
												<td class="trash">
													<a href="#" title="trash">
														<span class="icofont-close-line"></span>
													</a>
												</td>
											</tr>
										</table>

										<div class="table-footer">
											<div class="">
												<label>Tổng: </label>
												<span>2.800.000 đ</span>
											</div>
										</div>
									</div>
		                    	</div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</article>

		<article class="lth-carts-2">
		    <div class="container">
		        <div class="row">
		            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
		                <div class="module module_customer_information">
		                    <div class="module_title">
		                    	<h3 class="title">Thông tin khách hàng</h3>
		                    </div>

		                    <div class="module_content">
								<form class="contacts-form">
									<div class="form-content">
										<div class="form-group">
											<input class="form-control" type="text" name="Name" placeholder="Họ và tên">
										</div>
										<div class="groups-box">
											<div class="form-group">
												<input class="form-control" type="text" name="Phone" placeholder="Số điện thoại">
											</div>
											<div class="form-group">
												<input class="form-control" type="text" name="Email" placeholder="Email">
											</div>
										</div>
										<div class="groups-box">
											<div class="form-group">
												<div class="form-group-select">
													<select class="form-control">
														<option>Tỉnh thành</option>
														<option>Hà Nội</option>
														<option>Tp Hồ Chí Minh</option>
													</select>
												</div>
											</div>
											<div class="form-group">
												<div class="form-group-select">
													<select class="form-control">
														<option>Quận/Huyện</option>
														<option>Hà Nội</option>
														<option>Tp Hồ Chí Minh</option>
													</select>
												</div>
											</div>
										</div>
										<div class="form-group">
											<input class="form-control" type="text" name="Address" placeholder="Địa chỉ cụ thể (ghi rõ số nhà, ngõ, ngách)">
										</div>
										<div class="form-group">
											<textarea class="form-control" rows="5" placeholder="Nội dung"></textarea>
										</div>
									</div>
								</form>
		                    </div>
		                </div>
		            </div>

		            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
		                <div class="module module_payment_methods">
		                    <div class="module_title">
		                    	<h3 class="title">Phương thức thanh toán</h3>
		                    </div>

		                    <div class="module_content">
		                    	<label>Chuyển khoản thẻ ngân hàng</label>

		                    	<ul>
		                    		<li><img src="assets/images/msb.png" alt="Logo"></li>
		                    		<li>
		                    			<label>Thông tin tài khoản</label>
		                    		</li>
		                    		<li>
		                    			<span>Chủ tài khoản: </span>
		                    			Phạm Xuân Hùng
		                    		</li>
		                    		<li>
		                    			<span>Số tài khoản: </span>
		                    			03201015986803
		                    		</li>
		                    		<li>
		                    			<span>Chi nhánh: </span>
		                    			Ngân hàng TMCP Hàng Hải Việt Nam (MSB) - Chi nhánh Trung Yên, Hà Nội
		                    		</li>
		                    		<li>
		                    			<a href="#" title="" class="btn">Thanh toán</a>
		                    		</li>
		                    	</ul>
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