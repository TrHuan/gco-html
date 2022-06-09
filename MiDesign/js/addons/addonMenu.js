const addonMenu = () => {
    $(".btn__menu").on("click", function () {
        $("#header").toggleClass("active");
        $("body").toggleClass("open__body");
        let menusClass = $(".header__container");
        $(".box__menu").on("click", function (e) {
            if (
                !menusClass.is(e.target) &&
                menusClass.has(e.target).length === 0
            ) {
                $("#header").removeClass("active");
            }
        });
    });

    $(".menu .menu__list:has('ul')").on("click", function () {
        let ulChildren = $(this).children("ul");
        let aChildren = $(this).children(".menu__link");
        $(".menu .menu__list ul").not(ulChildren).slideUp();
        $(".menu .menu__list .menu__link").not(aChildren).removeClass("active");
        aChildren.toggleClass("active");
        ulChildren.slideToggle();
    });
};
export default addonMenu;
