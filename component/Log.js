/**
 * Created by wang on 16/3/20.
 */
var React = require("react-native"),
    Config = require("config");

var {
    ToastAndroid,
    Alert,
    } = React;

var Log = {
    Log_OPEN: true,
    log : function(){
        var msg = new Array();

        for(var i in arguments){
            var e = arguments[i];
            if(typeof e == "string"){
                msg.push(e);
            }else{
                msg.push(JSON.stringify(e));
            }
        }

        if(Log.Log_OPEN)
            console.log(">>>"+msg.join(","))
    },
    success:function(){
        Log.log("Success",arguments);
    },
    error:function(){
        Log.log("Error",arguments);
    },
    /**
     * 弹出提示框
     * @param msg
     */
    dialog:function(msg){
        ToastAndroid.show(msg,ToastAndroid.SHORT);
    },
    /**
     * 确认弹出框
     * @param msg
     * @param title
     * @param successCallback
     * @param cancelCallback
     */
    confrim:function(msg,title,successCallback,cancelCallback){
        title = title?title:Config.comfrimTite;
        Alert.alert(title,msg,[
            {text: Config.confrimText, onPress: () => successCallback?successCallback():null},
            {text: Config.confrimCancelText, onPress: () => cancelCallback?cancelCallback():null},
        ])
    }

}