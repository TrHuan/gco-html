<!DOCTYPE html>
<html>

<head>

	<title>Minh Quý Glass</title>
	
	<?php include 'templates/head.php'; ?>

</head>

<body>

	<?php include 'templates/header.php'; ?>

	<main class="main-site main-page main-contacts">		

		<article class="lth-breadcrumbs">
			<div class="module_breadcrumbs_image">
                <div class="module_image">
                	<div class="image">
                		<img src="assets/images/br-10.jpg" alt="Image">
                	</div>
                </div>

                <div class="module_title">	
					<h1 class="title">
						Liên hệ			
					</h1>
				</div>
			</div>

		    <div class="container">
		        <div class="row">
		            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                <div class="module module_breadcrumbs">
		                    <div class="module_content">
		                    	<ul>
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
		</article>

		<article class="lth-contacts">
			<div class="container">
		        <div class="row">
		            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
		            	<div class="module module_map">
		            		<div class="google-maps">
								<iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7451.6667673837965!2d105.76209787261938!3d20.959205213138592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452dad90e1e07%3A0x386f7d71c61225bc!2zS2h1IMSRw7QgdGjhu4sgVsSDbiBQaMO6LCBQaMO6IExhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1621916985609!5m2!1svi!2s" width="690" height="625" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
							</div>
		            	</div>
		            </div>

		            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
		            	<div class="module module_contacts">
		            		<div class="module_title">
		            			<h2 class="title">lIÊN HỆ VỚI mINH qUÝ gLASS</h2>
		            			<p class="infor">Vui lòng điền thông tin vào form bên dưới và gửi cho chúng tôi</p>
		            		</div>

							<form class="module_content">
								<div class="form-content">
									<div class="form-group">
										<input class="form-control" type="text" name="Name" placeholder="Họ và tên">
										<span class="fr-error">Lỗi</span>
									</div>	
									<div class="groups-box">
										<div class="form-group">
											<input class="form-control" type="text" name="Phone" placeholder="Số điện thoại">
											<span class="fr-error">Lỗi</span>
										</div>
										<div class="form-group">
											<input class="form-control" type="text" name="Email" placeholder="Email">
											<span class="fr-error">Lỗi</span>
										</div>
									</div>
									<div class="form-group">
										<input class="form-control" type="text" name="Title" placeholder="Tiêu đề">
										<span class="fr-error">Lỗi</span>
									</div>
									<div class="form-group">
										<textarea class="form-control" name="Node" placeholder="Lời nhắn"></textarea>
									</div>

									<div class="form-group">
										<div class="form-button">
											<button class="btn">Gửi</button>
										</div>
									</div>	
								</div>
							</form>
						</div>

						<div class="module module_address">							
							<div class="module_content">
								<h3>CÔNG TY TNHH SX VÀ THƯƠNG MẠI DỊCH VỤ MINH QUÝ</h3>

								<div class="content">
									<ul>
										<li>
											<i class="icofont-google-map icon"></i>
											Địa chỉ: Tòa CT 10 Khu đô thị Văn Phú, Hà Đông, Hà Nội
										</li>
										<li>
											<a href="tel: 0901234567" title="0901234567">
												<i class="icofont-ui-call icon"></i>
												Hotline: 0901234567
											</a>
										</li>
										<li>
											<a href="mailto: youremail@gmail.com" title="youremail@gmail.com">
												<i class="icofont-envelope icon"></i>
												Email: youremail@gmail.com
											</a>
										</li>
									</ul>
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