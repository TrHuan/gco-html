<?php include 'templates/header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<div class="art-breadcrumbs art-breadcrumbs-home" style="display: none;">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="#" alt="Breadcrumb">
					</div>
				</div>				
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="title-box title-breadcrumb">
						<h1 class="title">Trang chủ</h1>
					</div>
					<div class="content-box content-breadcrumb">
						<ul class="breadcrumb-box">
							<li>
								<a href="index.php" title="Trang chủ">Trang chủ</a>
							</li>
							<li>
								<span>Trang chủ</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> <!--breadcrumbs-->

<!-- //////////////////////////////////////////////////////////// -->

<main class="main-site page-site contacts-site">
	<div class="main-container">

		<article class="art-banners art-address">
			<div class="container">
				<div class="row">
					<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
						<div class="content-box content-banners">
							<div class="title-box title-banners">
								<h3 class="title">Chúng tôi sãn sàng hỗ trợ bạn khi cần</h3>
							</div>

							<div class="content">
								<!-- <div class="short-summary"> -->
								<ul>
									<li>Địa chỉ: Tầng 8 tào nhà Toyota Thanh Xuân, 315 Trường Chinh, phường Nhân Chính, quận Thanh Xuân, Hà Nội</li>
									<li>Hotline: 096 738 1313</li>
									<li>Email: info@gco.vn</li>
									<li>Điện thoại: (024)7 309 8885</li>
								</ul>
								<!-- </div> -->
							</div>
						</div>
					</div>

					<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
						<div class="banners-image">
							<div class="images" style="max-width: 481px; max-height: 395px;">
								<img src="assets/images/banner-05.jpg" alt="Banner" style="width: 100%; height: 100%;">
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>

		<article class="art-contacts">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="contacts-box">
							<div class="title-box title-contacts">
								<h3 class="title">Liên hệ với chúng tôi</h3>
								<p>Hãy để lại lời nhắn của bạn, chúng tôi sẽ liên hệ lại với bạn sớm nhất</p>
							</div>

							<div class="content-box content-contacts">
								<div class="contact-box">
									<div class="contact-content">
										<form class="forms">
											<div class="form-content">
												<div class="form-group-control">
													<div class="form-group">
														<input class="form-control" type="text" name="Name" placeholder="Họ tên *">
														<span class="fr-error">Lỗi</span>
													</div>
													<div class="form-group">
														<input class="form-control" type="text" name="Phone" placeholder="Số điện thoại *">
														<span class="fr-error">Lỗi</span>
													</div>
													<div class="form-group">
														<input class="form-control" type="text" name="Email" placeholder="Email *">
														<span class="fr-error">Lỗi</span>
													</div>
													<div class="form-group">
														<input class="form-control" type="text" name="Website" placeholder="Website *">
														<span class="fr-error">Lỗi</span>
													</div>
													<div class="form-group">
														<select class="form-control">
															<option>Tỉnh/TP</option>
															<option>Hà Nội</option>
															<option>TP.Hồ Chí Minh</option>
															<option>Đà Nẵng</option>
														</select>
														<span class="fr-error">Lỗi</span>
													</div>
												</div>	

												<div class="form-group-control">
													<div class="form-group">
														<label>Chúng tôi có thể liên hệ với bạn thời gian nào ?</label>
														<div class="group-control">
															<div class="radio-control">
																<input type="radio" name="radio" checked>
																<span>Sáng</span>
															</div>
															<div class="radio-control">
																<input type="radio" name="radio">
																<span>Chiều</span>
															</div>
															<div class="radio-control">
																<input type="radio" name="radio">
																<span>Tối</span>
															</div>
														</div>
													</div>
													<div class="form-group">
														<textarea class="form-control" type="text" name="Website" placeholder="Lời nhắn"></textarea>
														<span class="fr-error">Lỗi</span>
													</div>
												</div>

												<div class="form-group-control">
													<div class="form-group">
														<div class="button">
															<a href="#" title="Gửi" class="btn">Gửi</a>
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
			</div>
		</article>

	</div>
</main> <!-- main-site -->

<!-- //////////////////////////////////////////////////////////// -->

<?php include 'templates/footer.php'; ?>