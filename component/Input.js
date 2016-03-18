/**
 * Created by wang on 16/3/17.
 */
var React  = require('react-native'),
    jvsCss = require('../style/style.css'),
    JvsButton = require("./JvsButton");

var {
    Text,
    View,
    StyleSheet,
    TextInput
    } = React;
/**
 * @description 输入框
 * @property lableName
 */
var JvsInput = React.createClass({
    propTypes : {
        lableName: React.PropTypes.string,//标题
        value : React.PropTypes.string,//默认值
        secureTextEntry : React.PropTypes.bool,//是否为密码输入

    },




});

module.exprots = JvsInput;
