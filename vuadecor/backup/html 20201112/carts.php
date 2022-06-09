<?php include 'templates/header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<div class="art-breadcrumbs art-breadcrumbs-page">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="assets/images/bg-breadcrumb.jpg" alt="Breadcrumb">
					</div>
					<!-- <div class="title-box title-breadcrumb">
						<h1 class="title">Sản phẩm</h1>
					</div> -->
				</div>				
			</div>
		</div>
	</div>

	<!-- <div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="content-box content-breadcrumb">
						<ul class="breadcrumb-box">
							<li>
								<a href="index.php" title="Trang chủ">Trang chủ</a>
							</li>
							<li>
								<span>Sản phẩm</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div> -->
</div> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site contacts-site">
	<div class="main-container">

		<article class="art-carts">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="carts-box">
							<div class="contents-box carts-content">
								<div class="contents">
									<form class="form">
										<div class="form-content">
											<div class="form-group">
												<div class="table-content">
													<table>
														<tr>
															<th>Thông tin chi tiết sản phẩm</th>
															<th>Đơn giá</th>
															<th>Số lượng</th>
															<th>Tổng giá</th>
														</tr>

														<tr>
															<td>
																<div class="product-box">
																	<div class="product-image">
																		<a href="product-details.php" title="Product">
																			<img src="assets/images/pr-01.jpg" alt="Product" style="max-width: 300px; max-height: 300px; width: 100%; height: 100%;">
																		</a>
																	</div>
																	<div class="product-content">
																		<h4 class="product-name">
																			<a href="product-details.php" title="Product" class="product-link">Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table Lamp Janus Table LampJanus Table Lamp Janus Table Lamp Janus Table Lamp</a>
																		</h4>
																		<div class="product-category">
																			<a href="#" title="Category">Gỗ cao cấp</a>
																		</div>
																		<div class="button">
																			<a href="#" title="Xóa">Xóa</a>
																		</div>
																	</div>
																</div>
															</td>
															<td>
																<div class="product-prices">
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</td>
															<td>
																<div class="product-qty">
																	<button class="icon-minus">-</button>
																	<input type="text" name="number-qty" value="1" class="form-control">
																	<button class="icon-plus">+</button>
																</div>
															</td>
															<td>
																<div class="product-prices product-prices-total">
																	<span class="price">1.500.000<small>đ</small></span>
																</div>
															</td>
														</tr>
													</table>
												</div>
											</div>

											<div class="form-group">
												<div class="carts-bottom">
													<div class="note-box">
														<label>Chú thích cho chủ cửa hàng</label>
														<textarea class="form-control"></textarea>
													</div>

													<div class="carts-total">
														<ul>
															<li>
																<label>Tổng tiền </label>
																<span class="price">1.500.000<small>đ</small></span>
															</li>
															<li>
																<label>Vận chuyển </label>
																<span class="price">500.000<small>đ</small></span>
															</li>
															<li>
																<label>Thành tiền </label>
																<span class="price">2.000.000<small>đ</small></span>
															</li>
														</ul>
														<div class="button">
															<a href="#" title="Cập nhật" class="btn">Cập nhật</a>
															<a href="pays.php" title="Thanh toán" class="btn btn-pay">Thanh toán</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>

	</div>
</main> <!-- main-site -->

<!-- //////////////////////////////////////////////////////////// -->

<?php include 'templates/footer.php'; ?>