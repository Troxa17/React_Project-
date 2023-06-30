import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,FlatList,Image} from 'react-native';
import AppStyle from "../../components/AppStyle";
import axios from "axios";
const ip = "172.20.10.3"
const Store = (props)  => {
    const [data,setMessage] = useState(null);

    useEffect(() => {
  
      getData();
  
    },[])
  
    const getData = async() => {
      try{
        const url = "http://"+ip+":3001/api/tools/get_all_categories"
        const response = await axios.get(url)
        console.log(response.data.message)
        setMessage(response.data.message)   
         }
      catch(er){
        console.log(er)
      }
    }

    const renderItem = ({item})=>(
      <TouchableOpacity onPress={e=>{props.navigation.navigate('SubCategory',item._id)}} style={{marginTop:5,justifyContent: 'center', flex:1, width: "100%",height: 100,flexDirection: 'row',backgroundColor:'#B7C0EE'}}>
            <Image style={{height: "100%",width: "30%"}} source={{uri:item.Image}}/>
            <Text style={{height: "60%",width: "70%",alignSelf: 'center',textAlign:'center',fontSize: 30}}>{item.categoryName}</Text>
        </TouchableOpacity>
    )

    return (
  <View style={{width:'100%',height:'100%',flex:1}}>
        <FlatList style={{paddingTop: 10,width:'100%',height:'100%',borderColor: "black", borderWidth: 5}} data={data} renderItem={renderItem}/>
  </View>
    )
}
  

export const screensOptions = (navData) => {

    return {
        headerTitle: 'Store'
    }
}

export default Store;