<?php include 'header.php';?>

<div class="breadcrumbs">
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style="display: none;">
				<div class="title-box videos-title">
					<h2 class="title">Vận chuyển Việt Trung</h2>
				</div>
			</div>
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<div class="breadcrumbs-box">
					<ul>
						<li>
							<a href="index.html" title="Trang chủ">Trang chủ</a>
						</li>
						<li class="final">
							<span>Tra cước</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div> <!--breadcrumbs-->

<main class="main-site page-site">
	<article class="look-up-bill">
		<div class="container">
			<div class="row">
				<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="look-up-bill-content">
						<div class="look-up-bill-title title-box">
							<h1 class="title"><span>Tra cước vận chuyển ước tính</span></h1>
						</div>

						<div class="look-up-bill-box">
							<form class="look-bill-form">
								<div class="form-group group-weight">
									<span>Cân nặng</span>
									<input class="control-weight form-control" type="text" name="weight" value="" placeholder="">
								</div>	
								<div class="form-group group-size">
									<span>Kích thước</span>
									<input class="control-size form-control" type="text" name="size" value="" placeholder="Dài x Rộng x Cao">
								</div>		
								<div class="form-group group-delivery-area">
									<span>Khu vực giao hàng</span>
									<input class="control-delivery-area form-control" type="text" name="delivery-area" value="" placeholder="">
								</div>	
								<div class="form-group group-insurrance">
									<span>Bảo hiểm</span>
									<select class="control-insurrance form-control">
										<option>Có</option>
										<option>Không</option>
									</select>
								</div>	
							</form>

							<div class="look-bill-table">
								<div class="table-content">
									<table>
									  <tr class="title-table">
									    <th>Loại dịch vụ</th>
									    <th class="center">Phí vận chuyển</th>
									    <th class="center">Thời gian nhận hàng dự kiến</th>
									  </tr>
									  <tr class="content-table">
									    <td>Vận chuyển đường bộ</td>
									    <td class="center"></td>
									    <td class="center">3-5 ngày</td>
									  </tr>
									  <tr class="content-table">
									    <td>Vận chuyển đường không</td>
									    <td class="center"></td>
									    <td class="center">4-7 ngày</td>
									  </tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</main> <!--main-site-->

<?php include 'footer.php';?>