//用户信息
var userInfo = null;

//初始化本地缓存
function initLocStorage() {
    var userString = appcan.locStorage.getVal("userInfo");
    userInfo = userString ? eval("(" + userString + ")") : null;
    if (userInfo == null) {
        appcan.window.alert({
            title : "异常",
            content : "请重新登录！",
            buttons : '确定',
            callback : function(err, data, dataType, optId) {
                appcan.window.open("login", "login.html", 5);
            }
        });
    }
}

appcan.ready(function() {
    initLocStorage();
}); 