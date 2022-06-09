const frameVideo = () => {
    $(".on__video").on("click", function () {
        let idVideo = $(this).attr("data-idYoutube");
        if (idVideo) {
            let hasVideo = $(this).next(".show__video").children("iframe");
            let hasShow = $(this).next(".show__video");
            $(".show__video").not(hasVideo).children("iframe").remove();
            $(".show__video").not(hasShow).removeClass("active");
            $(".on__video").not(this).removeClass("active");
            let src = `https://www.youtube.com/embed/${idVideo}?autoplay=1`;
            $(this).next(".show__video").addClass("active");
            $(this).addClass("active");
            $(this).next(".show__video").html(`
            <iframe src="${src}"
            title="YouTube video player"
            frameborder="0" allowfullscreen>
            </iframe>
            `);
        }
    });
};
export default frameVideo;
