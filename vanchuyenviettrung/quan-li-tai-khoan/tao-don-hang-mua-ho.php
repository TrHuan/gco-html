<?php include 'header.php';?>

<div class="breadcrumbs" style="display: none;">
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="title-box videos-title">
					<h1 class="title">Vận chuyển Việt Trung</h1>
				</div>
			</div>
		</div>
	</div>
</div> <!--breadcrumbs-->

<main class="main-site page-site">
	<div class="main-container">
		<article class="main-header">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 m-order-1">
						<div class="hotline-block">
							<div class="hotline-box">
								<div class="hotline-icon">
									<img src="assets/images/icon-hotline.png" alt="Hotline">
								</div>
								<div class="hotline-content">
									<span>Hotline</span>
									<span class="number">1900 8852</span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-order-3">								
						<div class="search-block">
							<div class="search-box">
								<div class="content search-content">
									<form class="search-form">
										<div class="search-list">
											<div class="title">
												<img src="assets/images/logo-search.png" alt="Logo">
											</div>
											<!-- <div class="list">
												<ul>
													<li>
														
													</li>
												</ul>
											</div> -->
										</div>
										<input type="text" name="search" class="search-input" placeholder="Chào bạn, bạn muốn tìm gì?">
										<button class="btn search-btn">
											<i class="fa fa-search icon btn-icon search-icon" aria-hidden="true"></i>
										</button>
									</form>
									<p>(Nếu bạn chưa tìm thấy sản phẩm mong muốn vui lòng <a href="#" title="Click">Click vào đây</a> gửi yêu cầu từ khóa)</p>
								</div>
							</div>
						</div>
					</div>

					<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 m-order-2">
						<div class="hotline-block">
							<div class="hotline-box">
								<div class="hotline-icon">
									<img src="assets/images/icon-ti-gia.png" alt="Hotline">
								</div>
								<div class="hotline-content">
									<span>Tỉ giá</span>
									<span class="number">3,456đ</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>

		<article class="main-content purchase-orders">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="content">
							<div class="single-menus">
								<div class="table-content">
									<table>
									  <tr class="title-table">
									    <th class="center">STT</th>
									    <th class="center">Ảnh sản phẩm</th>
									    <th class="center">Ghi chú sản phẩm</th>
									    <th class="center">Link phẩm</th>
									    <th class="center">Số lượng</th>
									  </tr>
									  <tr class="content-table">
									    <td class="center title">1</td>
									    <td class="center td-image">
									    	<div class="image">
												<img src="assets/images/img-bill.png" alt="Bill">
												<div class="button-image">
													<button>Tải ảnh</button>
													<button class="link">Link ảnh</button>
												</div>
												<!-- <input type="file" name="filename" class="upimage"> -->
											</div>
									    </td>
									    <td class="center"><input type="text" name="ghi-chu" placeholder="Ghi chú"></td>
									    <td class="center"><input type="text" name="link-san-pham" placeholder="Link sản phẩm"></td>
									    <td class="center ">
									    	<div class="number">
										    	<span><i class="fal fa-minus icon icon-minus"></i></span>
										    	<input type="text" name="so-luong" placeholder="Số lượng">
										    	<span><i class="fal fa-plus icon icon-plus"></i></span>
									    	</div>
									    </td>
									  </tr>
									  <tr class="content-table">
									    <td class="center title">2</td>
									    <td class="center td-image">
									    	<div class="image">
												<img src="assets/images/img-bill.png" alt="Bill">
												<div class="button-image">
													<button>Tải ảnh</button>
													<button class="link">Link ảnh</button>
												</div>
												<!-- <input type="file" name="filename" class="upimage"> -->
											</div>
									    </td>
									    <td class="center"><input type="text" name="ghi-chu" placeholder="Ghi chú"></td>
									    <td class="center"><input type="text" name="link-san-pham" placeholder="Link sản phẩm"></td>
									    <td class="center ">
									    	<div class="number">
										    	<span><i class="fal fa-minus icon icon-minus"></i></span>
										    	<input type="text" name="so-luong" placeholder="Số lượng">
										    	<span><i class="fal fa-plus icon icon-plus"></i></span>
									    	</div>
									    </td>
									  </tr>
									</table>
								</div>
								<div class="button">
									<button class="btn">+ Thêm sản phẩm</button>
								</div>
							</div>
							<div class="button">
								<button class="btn order-btn">Đặt hàng</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</main> <!--main-->

<?php include 'footer.php';?>