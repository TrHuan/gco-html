<?php include 'headers/page-header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<div class="art-breadcrumbs">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="assets/images/bg-breadcrumb.jpg" alt="Breadcrumb">
					</div>
					<div class="title-box title-breadcrumb">
						<h1 class="title">Báo giá</h1>
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
								<span>Báo giá</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site quotes-site">
	<div class="main-container">

		<article class="art-quotes">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="quotes-box">
							<div class="title-box title-quotes">
								<h1 class="title"><span>Thông tin chi tiết sản phẩm</span></h1>
							</div>

							<div class="quotes-content">
								<form class="quotes-form">
									<div class="form-content">
										<div class="form-group">
											<label>Trích dẫn tiêu đề <small>*</small></label>
											<input type="text" name="qty" class="form-control">
										</div>	

										<div class="form-group form-group-radio">
											<label>Loại sản phẩm - Product type <small>*</small></label>
											<div>
												<input type="radio" name="Co" class="form-control" checked>
												<span>Có sẵn</span>
											</div>
											<div>
												<input type="radio" name="Khong" class="form-control">
												<span>Tùy chỉnh</span>
											</div>	
										</div>	

										<div class="form-group">
											<label>Tên sản phẩm - Product name <small>*</small></label>
											<input type="text" name="name" class="form-control">
										</div>	

										<div class="form-group form-group-select">
											<label>Chọn sản phẩm <small>*</small></label>
											<div class="categories-box">
												<input type="text" name="qty" class="form-control">
												<span class="sub-title"><!-- <i class="fad fa-sort-down icon"></i> --><i class="far fa-angle-down icon"></i></span>

												<div class="categories-content sub-content">
													<ul>														
														<li class="item">Chọn sản phẩm </li>
														<li class="item title">Sản phẩm tiêu biểu</li>
														<li class="item">Catalogue</li>
														<li class="item">Danh thiếp</li>
														<li class="item">Thiệp cưới</li>
														<li class="item">Bao thư</li>
														<li class="item">Tờ rơi</li>
														<li class="item">Menu</li>
														<li class="item">Giấy tiêu đề</li>
														<li class="item">Nhãn CD/DVD</li>
														<li class="item">Nhãn Decal</li>
														<li class="item">Thiệp mời</li>
														<li class="item">Posters</li>
														<li class="item">Túi giấy</li>
														<li class="item">Phiếu bảo hành</li>

														<li class="item title">Gia công</li>
														<li class="item">In gia công 4 màu</li>
														<li class="item">IN METALIZE - DECAL NHỰA</li>
														<li class="item">IN GIA CÔNG 1 MÀU</li>
														<li class="item">CÁN MÀNG GIA CÔNG</li>
														<li class="item">CÁN MÀNG METALIZE</li>
														<li class="item">CẮT GIA CÔNG</li>
														<li class="item">ĐÓNG KIM GIA CÔNG</li>
														<li class="item">ĐÓNG KEO GIA CÔNG</li>
														<li class="item">BẾ DECAL GRAPHTEC GIA CÔNG</li>
														<li class="item">XẾP GIA CÔNG HORIZON 746</li>
														<li class="item">BO GÓC, CHẠP GÓC GIA CÔNG</li>
														<li class="item">BẾ DÁN BAO THƯ GIA CÔNG</li>
														<li class="item">BẾ CẤN GIA CÔNG</li>
														<li class="item">ĐÓNG SỐ NHẢY GIA CÔNg</li>

														<li class="item title">In nhanh</li>
														<li class="item">In nhanh</li>

														<li class="item title">IN MẠ VÀNG, BẠC (FOIL)</li>
														<li class="item">IN MẠ VÀNG, BẠC (FOIL)</li>

														<li class="item title">IN UV ĐỊNH VỊ (SPOT UV)</li>
														<li class="item">IN UV ĐỊNH VỊ (SPOT UV)</li>

														<li class="item title">Mua giấy</li>
														<li class="item">GIẤY DECAL</li>
														<li class="item">GIẤY CARBONLESS</li>
														<li class="item">GIẤY BRISTOL</li>
														<li class="item">GIẤY COUCHE</li>
														<li class="item">GIẤY FORT</li>
													</ul>
												</div>
											</div>
										</div>

										<div class="form-group">
											<label>Số lượng</label>
											<input type="text" name="qty" class="form-control">
										</div>	

										<div class="form-group">
											<label>Kích cỡ</label>
											<input type="text" name="size" class="form-control">
										</div>	

										<div class="form-group">
											<label>Giấy</label>
											<input type="text" name="giay" class="form-control">
										</div>	

										<div class="form-group">
											<label>Số mặt in/Số trang</label>
											<input type="text" name="print" class="form-control">
										</div>	

										<div class="form-group">
											<label>Cán bề <small>*</small></label>
											<select class="form-control">
												<option>Không Cán bề</option>
												<option>Không Cán bề 1</option>
												<option>Không Cán bề 2</option>
											</select>
										</div>	

										<div class="form-group">
											<label>Cán màng <small>*</small></label>
											<select class="form-control">
												<option>Không Cán màng</option>
												<option>Không Cán màng 1</option>
												<option>Không Cán màng 2</option>
											</select>
										</div>	

										<div class="form-group">
											<label>Chi tiết bổ sung</label>
											<input type="text" name="del" class="form-control">
										</div>		

										<div class="form-group form-group-file">
											<label>Tải mẫu lên</label>
											
											<div class="file">
												<div class="button">
													<a href="#" class="btn"><i class="fas fa-upload icon"></i> Tải tập tin lên</a>
													<input type="file" name="filename" class="upimage">
												</div>
												<p>* Thông tin bắt buộc</p>
											</div>
										</div>		

										<div class="form-group form-group-button">
											<div class="button">
												<button class="btn">Lưu và thêm sản phẩm khác</button>
												<span>Hoặc</span>
												<button class="btn">Lưu lại và tiếp tục</button>
												<a href="#" class="btn-reset">Reset</a>
											</div>
										</div>	
									</div>
								</form>
							</div>
						</div>							
					</div>
				</div>
		</article>

	</div>
</main> <!-- main-site -->

<!-- //////////////////////////////////////////////////////////// -->

<?php include 'footer.php'; ?>