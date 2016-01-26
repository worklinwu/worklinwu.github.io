define(function (require, exports, module) {
    require("jquery");
    require("jStorage");


    exports.use = function (_callback) {
        window.DB = $.jStorage.get("DB");
        if (!DB) {
            _callback && loadData(_callback);
        } else {
            _callback();
        }
    };

    function loadData(_callback) {
        var url = "/data.json";
        $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            type: "GET",
            async: false,
            dataType: "json",
            success: function (jsonData) {
                DB = jsonData;
                DB.version = window.DB_VERISION;
                $.jStorage.set("DB", DB);
                $.jStorage.setTTL("DB", 600000); // 数据缓存十分钟
                _callback && _callback();
            }
        });
    }
});
