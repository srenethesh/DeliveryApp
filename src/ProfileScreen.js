import React, { useState } from 'react'
import { Text, View ,SafeAreaView,ScrollView,Image,TouchableOpacity,StyleSheet} from 'react-native'

const SearchScreen = () => {
  const [isToggled, setIsToggled] = useState(false);
    
  const handleToggle = () => {
    setIsToggled(!isToggled); 
  };

    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <ScrollView>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:60,marginLeft:20,marginRight:15}}>
      <View style={{flexDirection:'row',gap:12}}>
        <Image source={require('../assets/Profile.png')} style={{height:50,width:50}}/>
          <View style={{marginTop:10}}>
            <Text style={{color:'#364A1580',fontSize:12,fontWeight:500}}>Good morning</Text>
            <Text style={{fontSize:16,fontWeight:500,color:'#364A15'}}>Gutabo frank</Text>
          </View>
      </View>
      <TouchableOpacity style={[styles.toggleButton, isToggled && styles.toggledButton]} onPress={handleToggle}>
        <Text style={styles.buttonText}>{isToggled ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    )
  
}

export default SearchScreen;

const styles = StyleSheet.create({
  TextScroll:{
    marginHorizontal:10, 
    flexDirection:'row', 
    borderWidth:1, 
    borderRadius:20,
    justifyContent:'center', 
    padding:10,
    marginTop:10,
},
  ActiveTab:{
    backgroundColor:'#D2F4D6',
  },
  toggleButton: {
    width:64,
    height:34,
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggledButton: {
    backgroundColor: '#D2F4D6',
  },
  buttonText: {
    fontSize: 12,
    
    color: 'black',
  },
})