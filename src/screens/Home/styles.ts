import { StyleSheet } from 'react-native';


export const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#131016',
        padding:24
    },
    eventName:{
        color:'#FDFCFE',
        fontSize:24,
        fontWeight:'bold',
        marginTop:45
    },
    eventDate:{
        color:'#B6B6BB',
        fontSize:16
    }, 
    input:{
        flex:1,
        backgroundColor:'#1F1E25',
        height:56,
        borderRadius:5,
        color:"#FFF", 
        padding:16,
        fontSize:16,
        marginRight:7
    },
    buttonText:{
        color:"#FFF", 
        fontSize:26
    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#31CF67',
        alignItems:'center',
        justifyContent:"center"
    },  
    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:36,
        marginBottom:42,
        
    }, 
    listEmputText:{
        color:"#FFF",
        fontSize:16, 
        textAlign:"center"
    }

});