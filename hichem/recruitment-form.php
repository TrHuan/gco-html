<?php include 'templates/header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<div class="art-breadcrumbs art-breadcrumbs-2">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="assets/images/bg-recruitment-breadcrumb.jpg" alt="Breadcrumb">
					</div>
					<!-- <div class="title-box title-breadcrumb">
						<h1 class="title">Sản phẩm</h1>
					</div> -->
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
								<span>Tuyển dụng</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site contacts-site recruitment-form-site">
	<div class="main-container">
		
		<article class="art-recruitment-form">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="recruitment-form-box contacts-box">
							<div class="title-box title-recruitment-form">
								<h1 class="title"><span>ỨNG TUYỂN VỊ TRÍ  NHÂN VIÊN MARKETING</span></h1>
							</div>
							<div class="recruitment-form-content">
								<form class="contacts-form">
									<div class="form-content">
										<div class="form-group">
											<!-- <i class="fas fa-user icon"></i> -->
											<label>Họ tên</label>
											<input class="form-control" type="text" name="Name" placeholder="">
											<span class="fr-error">Lỗi</span>
										</div>	
										<div class="form-group">
											<!-- <i class="fas fa-envelope icon"></i> -->
											<label>Email</label>
											<input class="form-control" type="text" name="Email" placeholder="">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<!-- <i class="fas fa-phone-alt icon"></i> -->
											<label>Số điện thoại</label>
											<input class="form-control" type="text" name="Phone" placeholder="">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<!-- <i class="fas fa-phone-alt icon"></i> -->
											<label>Ngày tháng năm sinh</label>
											<input class="form-control" type="text" name="Phone" placeholder="">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<!-- <i class="fas fa-envelope icon"></i> -->
											<label>Trình độ</label>
											<input class="form-control" type="text" name="Level" placeholder="">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<!-- <i class="fas fa-envelope icon"></i> -->
											<label>Kinh nghiệm</label>
											<input class="form-control" type="text" name="Experience" placeholder="">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group upload-file">
											<label>Tải CV của bạn</label>
											<div class="button-upload">
												<div class="text">
													<span class="btn">Chọn tệp</span>
													<span>Không có tệp nào được chọn</span>
												</div>
												
												<input type="file" id="myfile" name="myfile">
											</div>
										</div>

										<div class="form-group">
											<div class="button">
												<button class="btn">Gửi CV</button>
											</div>
										</div>	
									</div>
								</form>
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