import {StyleSheet} from 'react-native';
import AppColors from './AppColors';


export default StyleSheet.create({
somestyle:{
    fontSize: 30
},
    container:{
        flex:1,
        padding:30,
        alignContent:'center',
        alignItems: 'center',
        backgroundColor: AppColors.snow,
        justifyContent: 'center'
        
    },
    dashboard:{
        flex:1,
        padding:30,
        alignContent:'center',
        alignItems: 'center',
        backgroundColor: AppColors.snow,
        justifyContent: 'center',
        backgroundColor:'#B7C0EE'
        
        
    },
    title:{
        color: AppColors.saffron,
        fontSize:24,
        fontFamily: 'IBMP-light'
    },
    btn:{
        width:'100%',
        backgroundColor:AppColors.saffron,
        height:50,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: AppColors.honeydew,
        shadowOffset: {
            width:2,
            height:2,
        },
        shadowOpacity: 0.80,
        shadowRadius: 6,
        elevation: 8

    },
    btn_text:{
        color:AppColors.outer_space,
        fontSize: 20,
        fontFamily: 'IBMP-light'
    },
    products: {
        flex: 1,
        justifyContent:'space-between',
        width:'100%',
        height: 50
    },
    products:{
        flexDirection:'column',
        width:'80%',
        height:100,
        borderRadius:12,
        marginBottom:20,
        padding:20
    }

})