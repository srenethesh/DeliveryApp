import React, { useState } from 'react'
import { Text, View ,SafeAreaView,ScrollView,Image,TouchableOpacity,StyleSheet} from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts';

const data = [205.23, 205.23, 205.23, 205.23, 205.23];

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
      <View style={{alignItems:'center',padding:40}}>
        <Text style={{color:'#364A15',fontSize:20}}>My Total Earning</Text>
        <Text style={{fontSize:48,fontWeight:500,color:'#364A15'}}>$14,520.25</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.selected]}>
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>This week</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>This month</Text>
        </TouchableOpacity>
      </View>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
      <View style={styles.monthContainer}>
        {['May', 'Jun', 'July', 'Aug', 'Sep'].map((month, index) => (
          <View key={index} style={styles.monthItem}>
            <Text style={styles.monthText}>{month}</Text>
            <Text style={styles.monthValue}>+ ${data[index]}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.earningText}>My Today Earning</Text>
      <Text style={styles.earningValue}>$325.23</Text>
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  selected: {
    backgroundColor: '#A0CFA0',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  chart: {
    height: 200,
    marginBottom: 20,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  monthItem: {
    alignItems: 'center',
  },
  monthText: {
    color: '#7B7B7B',
  },
  monthValue: {
    color: '#000',
  },
  earningText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  earningValue: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})