$(document).ready(function () {
    $('.bottom-header .article-preview__rating').each(function() {
        if($(this).text() > 7) {
            $(this).css({backgroundColor:'green'});
        }
        // console.log($(this).text());
       // $(this).addClass('high-rating');
    });
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                return this.st.mainClass = this.st.el.attr('data-effect');
            }
        }


    });

});