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

<main class="main-site main-page main-products main-products-all">
	<div class="main-container">
		<div class="main-content">

			<article class="art-products">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div class="products-box">
								<div class="products-filter">
									<div class="groups-box">
										<div class="products-number">
											<p>Showing 15 products</p>
										</div>

										<div class="filters-box">
											<div class="filter-button">
												<label>Filter by features</label>
												<div class="filtercta">
													<i class="far fa-sliders-h icon"></i>
												</div>												
											</div>

											<div class="filter-wrap">
												<div class="title-wrap">
													<div class="close-wrap">
														<i class="fal fa-times icon"></i>
													</div>
												</div>
												<div class="content-wrap">
													<div class="item">
														<div class="wrap-box">
															<label>Screen Size</label>
															<ul>
																<li>
																	<a href="#" title="">30" - 39"</a>
																</li>
																<li>
																	<a href="#" title="">40" - 49"</a>
																</li>
																<li>
																	<a href="#" title="">50" - 59"</a>
																</li>
																<li>
																	<a href="#" title="">60" - 69"</a>
																</li>
																<li>
																	<a href="#" title="">70" - 79"</a>
																</li>
																<li>
																	<a href="#" title="">80" - 89"</a>
																</li>
																<li>
																	<a href="#" title="">100" and up</a>
																</li>
															</ul>
														</div>
													</div>

													<div class="item">
														<div class="wrap-box">
															<label>Features</label>
															<ul class="g2column">
																<li>
																	<a href="#" title="">Laser TV ›</a>
																</li>
																<li>
																	<a href="#" title="">Quantum Dot Colour ›</a>
																</li>
																<li>
																	<a href="#" title="">ULED ›</a>
																</li>
																<li>
																	<a href="#" title="">Dolby Atmos® ›</a>
																</li>
																<li>
																	<a href="#" title="">Ultra HD Premium ›</a>
																</li>
																<li>
																	<a href="#" title="">HDR10+ ›</a>
																</li>
																<li>
																	<a href="#" title="">4K HDR Certified ›</a>
																</li>
																<li>
																	<a href="#" title="">Dolby Vision™ HDR ›</a>
																</li>
																<li>
																	<a href="#" title="">Roku TV ›</a>
																</li>
																<li>
																	<a href="#" title="">Alexa built-in ›</a>
																</li>
																<li>
																	<a href="#" title="">Smart TV ›</a>
																</li>
																<li>
																	<a href="#" title="">VIDAA U4 & Freeview Play ›</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="products-grid">
									<div class="content-box content-products">
										<div class="contents">

											<?php include 'templates/addons/products-televisions.php'; ?>

											<?php include 'templates/addons/products-fridges.php'; ?>

											<?php include 'templates/addons/products-washing-machines.php'; ?>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>

		</div>
	</div>
</main> <!-- main-site -->

<!-- //////////////////////////////////////////////////////////// -->

<?php include 'templates/footer.php'; ?>