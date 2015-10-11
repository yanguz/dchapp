//服务器地址
var server = "http://192.168.1.104:8080/dchserver";

//接口
var api = {
    login : server + "/app/sys/login.json",
    snsmessageList : server + "/app/snsmessage/snsmessageList.json",
    publishSnsmessage : server + "/app/snsmessage/publishSnsmessage.json",
    praiseSnsmessage : server + "/app/snsmessage/praiseSnsmessage.json",
    commentSnsmessage : server + "/app/snsmessage/commentSnsmessage.json",
    uploadSnsmessageImage : server + "/app/snsmessage/uploadSnsmessageImage.json",
    clubList : server + "/app/club/clubList.json" ,
    activityList : server + "/app/activity/activityList.json",
    activityDetail : server + "/app/activity/activityDetail.json"
};
