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
 * @property lableName  标题
 * @property value   默认值
 * @property secureTextEntry 是否密码
 * @property multiline 行数
 * @property editable 是否可以编辑
 * @property lineNum
 */
var Input = React.createClass({
    propTypes : {
        lableName : React.PropTypes.string.isRequired,//标题
        value : React.PropTypes.string,//默认值
        secureTextEntry : React.PropTypes.bool,//是否密码
        multiline : React.PropTypes.bool,//行数
        editable : React.PropTypes.bool,//是否可编辑
        lineNum : React.PropTypes.number,//行数
        onChangeText : React.PropTypes.func,//输入事件
        showUnderline : React.PropTypes.bool,//是否显示下划线
    },



    getDefaultProps:function(){
        return {
            secureTextEntry:false,
            multiline:false,
            editable:true,
            lineNum:15,
            style:null,
            value:"",
            showUnderline:false,
            onChangeText:(text)=>{},
        };
    },
    getInitialState:function(){
        return{
            lableName:this.props.lableName,
            value : this.props.value,
            secureTextEntry : this.props.secureTextEntry,
        };
    },

    render:function(){
        return (
            <View style={[styles.row,this.props.style,this.props.showUnderline?styles.rowLine:null]}>
                <Text style={[styles.left,jarvisCss.text]}>{this.state.lableName}</Text>
                {!this.props.editable && this.props.value == "" ? null :
                    <TextInput
                        style={[styles.center,jarvisCss.inputText,this.props.editable?null:jarvisCss.inputTextReadonly]}
                        defaultValue={this.props.value}
                        underlineColorAndroid='no'
                        secureTextEntry={this.state.secureTextEntry}
                        multiline={this.state.multiline}
                        numberOfLines={this.state.numberOfLines}
                        editable={this.state.editable}
                        onChangeText={this.onChangeText}
                        ></TextInput>
                }
                {this.props.secureTextEntry?
                    <JvsButton icon="eye" iconStyle={styles.icon} iconSize={18} onClick={()=>this.setState({secureTextEntry:!this.state.secureTextEntry})}/>
                    :null
                }

                {this.props.children?
                    <View style={styles.right}>
                        {this.props.children}
                    </View>
                    :null}
            </View>
        );
    },

    onChangeText(text){
        this.setState({value:text});
        this.props.onChangeText(text);
    },

});

var styles = StyleSheet.create({
    rowLine:{
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.08)',
    },
    row:{
        flexDirection:'row',
        height:35,
        marginLeft:10,
        marginRight:10,
    },
    left:{
        width:60,
        alignSelf:"center",
    },
    center:{
        flex:2,
        alignSelf:"center",
        paddingTop:13,
    },
    right:{
    },
    icon:{
        marginTop:7,
    }

});

module.exprots = Input;
