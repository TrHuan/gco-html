<?php include 'headers/page-header.php'; ?>

<!-- //////////////////////////////////////////////////////////// -->

<div class="art-breadcrumbs">
	<div class="container-fluid">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-content">
					<div class="image-box breadcrumb-image">
						<img src="assets/images/bg-contacts-breadcrumb.jpg" alt="Breadcrumb">
					</div>
					<div class="title-box title-breadcrumb">
						<h1 class="title">Liên hệ</h1>
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
								<span>Liên hệ</span>
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

		<article class="art-banners art-contacts">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="title-box title-banner title-contacts">
							<h1 class="title"><span>Liên hệ với chúng tôi</span></h1>
						</div>
					</div>

					<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
						<div class="art-map">
							<div class="map-box">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.256225742192!2d106.64887931533423!3d10.791677261861627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6c702f9d67%3A0xc0ab33794c3642f5!2sC%C3%B4ng%20Ty%20TNHH%20In%20Nhanh%20Nhanh!5e0!3m2!1svi!2s!4v1599062713985!5m2!1svi!2s" width="725" height="353" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
							</div>
						</div>

						<div class="address-box">
							<ul>
								<li>
									<h4>Công ty TNHH In Nhanh Nhanh</h4>
								</li>
								<li>
									<i class="fas fa-map-marker-alt icon"></i>
									<span>Số 61 Võ Thành Trang, P.11, Q.Tân Bình, TP.Hồ Chí Minh</span>
								</li>
								<li class="li">
									<div>										
										<i class="fas fa-phone-alt icon"></i>
										<span>0704 646 517</span>
									</div>
									<div>
										<i class="fal fa-print icon"></i>
										<span>028. 3971 2849</span>
									</div>
								</li>
								<li>
									<i class="fas fa-envelope icon"></i>
									<span>Liên hệ.innhanh@gmail.com</span>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
						<div class="contacts-box">
							<div class="title-box title-contacts">
								<h3 class="title"><span>Gửi phản hồi cho chúng tôi</span></h3>
							</div>

							<div class="contacts-content">
								<form class="contacts-form">
									<div class="form-content">
										<div class="form-group">
											<!-- <i class="fas fa-user icon"></i> -->
											<input class="form-control" type="text" name="Name" placeholder="Họ và tên">
											<span class="fr-error">Lỗi</span>
										</div>	
										<div class="form-group">
											<!-- <i class="fas fa-envelope icon"></i> -->
											<input class="form-control" type="text" name="Email" placeholder="Email">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<!-- <i class="fas fa-phone-alt icon"></i> -->
											<input class="form-control" type="text" name="Phone" placeholder="Số điện thoại">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<!-- <i class="fas fa-phone-alt icon"></i> -->
											<textarea class="form-control" type="text" name="Content" placeholder="Nội dung" rows="9"></textarea>
										</div>

										<div class="form-group">
											<div class="button">
												<button class="btn">Gửi</button>
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