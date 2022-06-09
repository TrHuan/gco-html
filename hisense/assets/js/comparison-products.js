$(document).ready(function() {
    function equalizeComparisons(e, t) {
        var i = 0;
        jQuery(e).each(function() {
            jQuery(this).find(".features").css("height", "auto");
            var e = 40 * (t - jQuery(this).closest(".comparison-product").data("index"));
            jQuery(this).find(".features").height() + e > i && (i = jQuery(this).find(".features").height(), jQuery(this).closest(".comparison-product").data("index"))
        }), i > 0 && jQuery(e).each(function() {
            var e = 40 * (t - jQuery(this).closest(".comparison-product").data("index")),
                n = i + e;
            jQuery(this).find(".features").height(n)
        })
    }

    function setMe() {
        let t, i;
        // const n = window.matchMedia("(min-width:979px)");
        const n = window.matchMedia("(min-width:1920px)");

        function s(t) {
            var i = $(".comparison-products-block--" + t + " .comparison-product:first-child .content").offset().left,
                s = $(".comparison-products-block--" + t + " .comparison-product:first-child .content").offset().top,
                r = $(".comparison-products-block--" + t + " .comparison-product:last-child .content").offset().left,
                a = $(".comparison-products-block--" + t + " .comparison-product:last-child .content").offset().top;
            return !1 === n.matches && (console.log("nomatches calculateLineAngle"), a = s - 39.59, r = i + $(".comparison-products-block--" + t + " .comparison-product .content").outerWidth()), 180 * Math.atan2(a - s, r - i) / Math.PI
        }

        function r(t, i) { var x = Math.abs(t); $(".comparison-products-block--" + i + " .comparison-products .comparison-product .line").css({ transform: "rotate(" + x + "deg)" }), $(".comparison-products-block--" + i + " .comparison-products .comparison-product .bg").css({ transform: "skew(0, " + x + "deg)" }) } $(document).ready(function() {
            $(".comparison-products-block").length > 0 && $(".comparison-products-block").each(function() {
                $(this);
                var a = $(this).data("type"),
                    o = $(a);
                r(o, a);
                var l = $(this).find(".comparison-product").length;

                function c() { r(o = s(a), a) } equalizeComparisons(".comparison-products-block--" + a + " .comparison-product", l), $(window).resize(function() { clearTimeout(t), t = setTimeout(c, 300), equalizeComparisons(".comparison-products-block--" + a + " .comparison-product", l) });
                const d = function() {
                        if (!0 !== n.matches) return !1 === n.matches ? h() : void 0;
                        void 0 !== i && i.destroy(!0, !0)
                    }
            })
        })
    }
    setMe();
})