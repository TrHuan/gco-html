

<!DOCTYPE html>

<html class="demo-html">



<head>



    <title>GCO Web Demo</title>



    <?php include 'templates/head.php'; ?>



</head>



<body>



    <main class="main-site main-demo">



        <div id="view-demo" class="view-demo">
            <div class="demo-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <a href="http://khogiaodien.dimaweb.vn/templates/mau-bh-30" class="view-back">
                                <i class="icofont-double-left"></i> Quay về xem chi tiết
                            </a>
                        </div>
                        <div class="col-lg-5 d-none d-lg-flex justify-content-center align-items-center view-type">
                            <a class="type-item desktop current" href="javascript:void()">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 0H2C.897 0 0 .897 0 2v8c0 1.103.897 2 2 2h4.667v2h-2c-.552 0-1 .447-1 1 0 .553.448 1 1 1h6.667c.552 0 1-.447 1-1 0-.553-.448-1-1-1h-2v-2H14c1.104 0 2-.897 2-2V2c0-1.103-.896-2-2-2zM2 10V2h12v8H2z"></path>
                                </svg>
                                Desktop
                            </a>
                            <a class="type-item mobile" href="javascript:void()">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.7 0H6.3C5.6 0 5 .6 5 1.3v21.3c0 .8.6 1.4 1.3 1.4h12.3c.7 0 1.4-.587 1.4-1.287V1.3c0-.7-.6-1.3-1.3-1.3zm-6.2 22.6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3zm4.5-4c0 .2-.2.4-.4.4H8.4c-.2 0-.4-.2-.4-.4V3.4c0-.2.2-.4.4-.4h8.1c.3 0 .5.2.5.4v15.2z"></path>
                                </svg>
                                Mobile
                            </a>
                            <a class="type-item tablet" href="javascript:void()">
                                <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37 0h-28c-2.76 0-5 2.24-5 5v38c0 2.76 2.24 5 5 5h28c2.76 0 5-2.24 5-5v-38c0-2.76-2.24-5-5-5zm-14 46c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm15-8h-30v-32h30v32z"></path>
                                </svg>
                                Tablet
                            </a>
                        </div>
                        <div class="col-6 col-md-6 col-lg-4 text-right" style="line-height: 35px;">
                            <a href="javascript:void(0)" class="btn btn-popup btn-registration" data_popup="registration">Đăng ký giao diện</a>
                            <a href="" class="view-normal d-none d-lg-inline-block"><i class="icofont-close"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="demo-wrapper" class="desktop-view">
                <div id="demo-container">
                    <iframe id="frame" src="https://demo.wpthemego.com/themes/sw_maxshop/"></iframe>
                </div>
            </div>

            <style>
                .form-group.has-error input,
                .form-group.has-error textarea {
                    border-color: #dc3545!important;
                }
                
                .form-group .help-block.error-help-block {
                    color: #dc3545;
                    border-color: #dc3545!important;
                }
                
                .form-group.has-success input,
                .form-group.has-success textarea {
                    border-color: #28a745!important;
                }

                html, body, .main-demo,
                .view-demo {
                    height: 100%;
                }

                .view-demo .desktop-view {
                    position: relative;
                    width: 100%;
                    height: calc(100% - 40px);
                    text-align: center;
                }

                .view-demo .desktop-view #demo-container {
                    -webkit-transition-property: all;
                    -moz-transition-property: all;
                    transition-property: all;
                    -webkit-transition-duration: 300ms;
                    -moz-transition-duration: 300ms;
                    transition-duration: 300ms;
                    -webkit-transition-timing-function: cubic-bezier(.605,.195,.175,1);
                    -moz-transition-timing-function: cubic-bezier(.605,.195,.175,1);
                    transition-timing-function: cubic-bezier(.605,.195,.175,1);
                    max-width: 100%;
                    max-height: 100%;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    overflow-y: auto;
                    -webkit-overflow-scrolling: touch;
                }

                .view-demo .desktop-view #demo-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    min-width: 100%;
                    border: none;
                }

                .view-demo .demo-header {
                    background: #18a4dd;
                    height: 40px;
                }

                .view-demo .demo-header {
                    background: #58585a;
                }

                .view-demo .demo-header .view-back {
                    display: inline-block;
                    color: #fff;
                    font-size: 14px;
                    line-height: 40px;
                    margin-right: 20px;
                    margin-left: 10px;
                    font-weight: bold;
                }

                .view-demo .demo-header .btn-registration {
                    line-height: 30px;
                    padding: 0 20px;
                    font-size: 14px;
                    margin-right: 10px;
                    background-image: -moz-linear-gradient(180deg,#35e486 0%,#22db86 54%,#0fd186 99%);
                    background-image: -webkit-linear-gradient(180deg,#35e486 0%,#22db86 54%,#0fd186 99%);
                    background-image: -ms-linear-gradient(180deg,#35e486 0%,#22db86 54%,#0fd186 99%);
                    color: #fff;
                    border-radius: 45px;
                    display: inline-block;
                    -webkit-transition-property: background-color border-color color;
                    -moz-transition-property: background-color border-color color;
                    transition-property: background-color border-color color;
                    -webkit-user-select: none;
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-transition-property: color;
                    transition-property: color;
                    -webkit-transition-duration: .5s;
                    transition-duration: .5s;
                    white-space: nowrap;
                    -webkit-transition: all .5s ease-in-out;
                    -moz-transition: all .5s ease-in-out;
                    -o-transition: all .5s ease-in-out;
                    transition: all .5s ease-in-out;
                    text-decoration: none;
                }

                .view-demo .demo-header .btn-registration {
                    background: #276EF1;
                }

                .view-demo .demo-header .view-normal {
                    font-size: 15px;
                    color: #fff;
                    display: inline-block;
                    margin-right: 15px;
                    font-weight: bold;
                    vertical-align: middle;
                }

                .view-demo .demo-header .view-type a {
                    display: flex;
                    color: #276EF1;
                    font-weight: bold;
                    font-size: 15px;
                    margin-right: 10px;
                    text-decoration: none;
                    align-items: center;
                }

                .view-demo .demo-header .view-type a.current,
                .view-demo .demo-header .view-type a:hover {
                    color: #fff;
                }

                .view-demo .demo-header .view-type a svg {
                    width: 24px;
                    height: 24px;
                    vertical-align: middle;
                    fill: #276EF1;
                    margin-right: 7px;
                    flex-shrink: 0;
                }

                .view-demo .demo-header .view-type a.current svg,
                .view-demo .demo-header .view-type a:hover svg {
                    fill: #fff;
                }
            </style>



        </div>


        <div class="popups">

    <div class="popups-content">

        <div class="popup-box">

            <div class="content registration">

                <a href="#" title="" class="close" data_close="registration">

                    <i class="icofont-close icon"></i>

                </a>

                

                <h3 class="title">Đăng ký sử dụng giao diện</h3>

                

                <form class="contacts-form">

                    <div class="form-content">

                        <div class="form-group">

                            <input class="form-control" type="text" name="Name" placeholder="Họ và tên">

                        </div>  

                        <div class="form-group">

                            <input class="form-control" type="text" name="Phone" placeholder="Số điện thoại">

                        </div>

                        <div class="form-group">

                            <input class="form-control" type="text" name="Email" placeholder="Email">

                        </div>

                        <div class="form-group">

                            <input class="form-control" type="text" name="Address" placeholder="Địa chỉ">

                        </div>

                        <div class="form-group">

                            <textarea class="form-control" rows="5" placeholder="Nội dung"></textarea>

                        </div>

                        <div class="form-group form-group-button">

                            <button class="btn btn-send">

                                <span>Gửi</span>

                            </button>

                        </div>  

                    </div>

                </form>

            </div>

        </div>

    </div>



    <div class="popups-content">

        <div class="popup-box">

            <div class="content hosting-standarrd">

                <a href="#" title="" class="close" data_close="hosting-standarrd">

                    <i class="icofont-close icon"></i>

                </a>

                

                <h3 class="title">Chọn thời gian cho gói Standarrd</h3>

                

                <div class="groups-box">

                    <div class="item">

                        <div class="content-box">

                            <h4>12 tháng</h4>



                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-standarrd">Chọn</a>

                            </div>

                        </div>

                    </div>



                    <div class="item">

                        <div class="content-box content-center">

                            <h4>24 tháng</h4>

                            

                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-standarrd">Chọn</a>

                            </div>

                        </div>

                    </div>



                    <div class="item">

                        <div class="content-box">

                            <h4>36 tháng</h4>

                            

                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-standarrd">Chọn</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>



    <div class="popups-content">

        <div class="popup-box">

            <div class="content hosting-pro">

                <a href="#" title="" class="close" data_close="hosting-pro">

                    <i class="icofont-close icon"></i>

                </a>

                

                <h3 class="title">Chọn thời gian cho gói PRO</h3>

                

                <div class="groups-box">

                    <div class="item">

                        <div class="content-box">

                            <h4>12 tháng</h4>



                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-pro">Chọn</a>

                            </div>

                        </div>

                    </div>



                    <div class="item">

                        <div class="content-box content-center">

                            <h4>24 tháng</h4>

                            

                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-pro">Chọn</a>

                            </div>

                        </div>

                    </div>



                    <div class="item">

                        <div class="content-box">

                            <h4>36 tháng</h4>

                            

                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-pro">Chọn</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>



    <div class="popups-content">

        <div class="popup-box">

            <div class="content hosting-e-commerce">

                <a href="#" title="" class="close" data_close="hosting-e-commerce">

                    <i class="icofont-close icon"></i>

                </a>

                

                <h3 class="title">Chọn thời gian cho gói E - Commerce</h3>

                

                <div class="groups-box">

                    <div class="item">

                        <div class="content-box">

                            <h4>12 tháng</h4>



                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-e-commerce">Chọn</a>

                            </div>

                        </div>

                    </div>



                    <div class="item">

                        <div class="content-box content-center">

                            <h4>24 tháng</h4>

                            

                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-e-commerce">Chọn</a>

                            </div>

                        </div>

                    </div>



                    <div class="item">

                        <div class="content-box">

                            <h4>36 tháng</h4>

                            

                            <p class="price">Tổng: <span>2.160.000</span> đ</p>



                            <div class="button-box">

                                <a href="#" class="close btn" data_close="hosting-e-commerce">Chọn</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>



    </main>


    <?php include 'templates/script.php'; ?>

    <script>
        (function($) {
            "use strict";
            $('.button-demo-rtl').on('click', function(e) {
                $(this).hide();
                $('.button-demo-ltr').show();
                $('body').addClass('rtl');
                $('html').attr('direction', 'rtl');
                $('.responsive-slider').attr('rtl', 'true');
                $.cookie('rtl_cookie', 1);
                e.preventDefault();
            });
            $('.button-demo-ltr').on('click', function(e) {
                $(this).hide();
                $('.button-demo-rtl').show();
                $('body').removeClass('rtl');
                $('html').removeAttr('direction');
                $('.responsive-slider').attr('rtl', 'false');
                $.cookie('rtl_cookie', 0);
                e.preventDefault();
            });
            $('.button-demo-boxed').on('click', function(e) {
                $(this).hide();
                $('.button-demo-wide').show();
                $('body').addClass('boxed-layout');
                $.cookie('boxed_cookie', 1);
                e.preventDefault();
            });
            $('.button-demo-wide').on('click', function(e) {
                $(this).hide();
                $('.button-demo-boxed').show();
                $('body').removeClass('boxed-layout');
                $.cookie('boxed_cookie', 0);
                e.preventDefault();
            });
            $(document).ready(function() {
                if ($.cookie('rtl_cookie') == 1) {
                    $('.button-demo-rtl').hide();
                    $('.button-demo-ltr').show();
                    $('body').addClass('rtl');
                    $('html').attr('direction', 'rtl');
                    $('.responsive-slider').attr('rtl', 'true');
                }
                if ($.cookie('boxed_cookie') == 1) {
                    $('body').toggleClass('boxed-layout');
                    $('.button-demo-boxed').hide();
                    $('.button-demo-wide').show();
                }
            });
        })(jQuery);
    </script>

    <script type="text/javascript">
        $(function () {
            $(".view-type a.desktop").click(function () {
                $(".view-type a").removeClass("current");
                $(this).addClass("current");
                $("#demo-container").attr('style', 'max-width: 100%; max-height: 100%; margin: 0px; top: 0px; left: 0px;');
            });

            $(".view-type a.mobile").click(function () {
                $(".view-type a").removeClass("current");
                $(this).addClass("current");
                $("#demo-container").attr('style', 'max-width: 375px; max-height: 568px; margin: 0px 0px 0px -187px; top: 0; left: 50%;');
            });

            $(".view-type a.tablet").click(function () {
                $(".view-type a").removeClass("current");
                $(this).addClass("current");
                $("#demo-container").attr('style', 'max-width: 1024px; max-height: 568px; margin: 0px 0px 0px -512px; top: 0; left: 50%;');
            });
        });
    </script>

</body>

</html>