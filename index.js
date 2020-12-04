$(document).ready(() => {
    console.log("document ready");
    let btnToggle = false;

    $('.btnImpressum').click((e) => {
        console.log("btn state:", btnToggle);
        if (!btnToggle) {
            $.get("impressum.txt",
                (data) => {
                    $('.ajaxImpressum').html(data);
                    $('html, body').animate(
                        {
                            scrollTop: $(document).height()
                        }, 'slow');
                    btnToggle=true;
                }
            );
        } else {
            $('.ajaxImpressum').html("");
            $('html, body').animate(
                {
                    scrollTop: $(document).height()
                }, 'slow');
            btnToggle=false;
        }
    })
});