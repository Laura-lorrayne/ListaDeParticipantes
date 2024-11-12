import { StyleSheet } from 'react-native';


export const styles= StyleSheet.create({
    container:{
        backgroundColor:'#1F1E25',
        width:'100%', 
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:12
    },
    name:{
        flex:1,
        color:'#FFF',
        fontSize:16,
        marginLeft:16
    },
    buttonText:{
        color:"#FFF", 
        fontSize:24
    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#E23c44',
        alignItems:'center',
        justifyContent:"center"
    },
});