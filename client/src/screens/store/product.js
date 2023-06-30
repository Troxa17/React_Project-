import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,ScrollView, Pressable,Image,Box,Heading, FlatList} from 'react-native';
import AppStyle from "../../components/AppStyle";
import products from '../poducts.js'
import AppColors from "../../components/AppColors";
import axios from "axios";
const ip = "172.20.10.3"




// const renderitem = ({ item }) =>{

//     return(
//     <TouchableOpacity style={AppStyle.btn} onPress={ () => {props.navigation.navigate('Product')}}  >
//                 <Text style={AppStyle.btn_text}>{item.name}</Text>
//     </TouchableOpacity>)
// }

const Product = (props)  => {

        const [data,setMessage] = useState(null);
    
        useEffect(() => {
      
          getData();
      
        },[])
      
        const getData = async() => {
            try{
              const url = "http://"+ip+":3001/api/tools/get_product_by_id/:pid"
              const response = await axios.get(url)
              console.log(response.data.message)
              setMessage(response.data.message)   
               }
            catch(er){
              console.log(er)
            }
          }

          const renderItem = ({item})=>(
                <View>
                  <Image style={{height: "100%",width: "100%"}} source={{uri:item.productImage}}/>
                  <Text style={{height: "40%",width: "50%",alignSelf: 'center',textAlign:'center',fontSize: 20}}>{item.productName}</Text>
                  </View>
          )
    

    return (
        // <View style={AppStyle.container}>
        //     <Text style = {AppStyle.title}>Product screen</Text>
        //     <TouchableOpacity style={AppStyle.btn} onPress={ () => {props.navigation.navigate('ProductDetails')}}  >
        //         <Text style={AppStyle.btn_text}>Go to Product Details</Text>
        //     </TouchableOpacity>
        // </View>


        <View style={{width:'100%',height:'100%',flex:1}}>
        <FlatList style={{paddingTop: 10,width:'100%',height:'100%',borderColor: "black", borderWidth: 5}} data={data} renderItem={renderItem}/>
  </View>
    )
}

export const screensOptions = (navData) => {

    return {
        headerTitle: 'Product'
    }
}


export default Product;