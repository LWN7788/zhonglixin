var base_url = 'http://localhost:8128';

$(function () {
    $.ajax({
        url: base_url + "/QdxData/titleUrlList",
        dataType: "JSON",
        cache: false,
        type: "GET",
        success: function (res) {
            var data = {
                list: res.data
            }
            var html = template('titleList', data);
            $('.tab').html(html);
        }
    })
})
