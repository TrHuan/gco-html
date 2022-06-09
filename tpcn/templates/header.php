
<div class="search-box">
	<div class="content-box">
		<a href="#" class="close-title">
			<i class="typo-icon typo-icon-close-1"></i>
		</a>

		<div class="search-container">													
			<form role="search" metho="get" class="forms search-form" action="#">
				<div class="form-content">
					<div class="form-group">
						<input type="text" name="s" placeholder="Tìm kiếm..." class="form-control">
					</div>
					<div class="form-group">
						<button class="btn btn-search" aria-label="Search">
							<i class="typo-icon typo-icon-search-1 icon"></i>
						</button>
						<input type="hidden" name="post_type" value="product||blog">
					</div>
				</div>    
			</form>
		</div>
	</div>
</div>

<div class="megamenu megamenu-mobile-content d-xl-none">
	<div class="content-box">
		<a class="close-title">
			<i class="typo-icon typo-icon-close-1"></i>
		</a>

		<?php include 'templates/addons/menu-box.php'; ?>
	</div>                             
</div>

<header class="headers">

	<div class="header-top">
		<div class="container">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-column column-1">
					<div class="header-top-box groups-box">
						<div class="top-left">
							<ul>
								<li>
									<i class="typo-icon typo-icon-email-2 icon"></i>
									<a href="mailto: youremail@gmail.com" title="youremail@gmail.com">youremail@gmail.com</a>
								</li>
								<li>
									<i class="typo-icon typo-icon-phone icon"></i>
									<a href="tel:0901234567" title="0901234567">0901234567</a>
								</li>
								<!-- <li>
									<a href="chinh-sach-huong-dan.php" title="Chính sách hướng dẫn">Chính sách hướng dẫn</a>
								</li> -->
							</ul>
						</div>
						
						<div class="top-right">
							<ul>
								<li>
									<a href="#" title="" class="search-icon">
										<i class="icofont-search-1 icon"></i>
									</a>
								</li>
								<!-- <li>
									<a href="gio-hang.php" title="" class="cart-icon">
										<i class="icofont-shopping-cart icon"></i>
										<span class="number">0</span>
									</a>
								</li> -->
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php include 'templates/headers/header-main.php';?>
	
</header>