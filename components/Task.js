import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Task = (props)=> {
    return(
        <View style = {styles.item}>
        <View style = {styles.itemLeft}>
        <View style = {styles.square}></View>
        <Text style = {styles.itemText}> {props.text}</Text>
        </View>
        <View style = {styles.circular}></View>
       </View>
    );
};
 
const styles = StyleSheet.create({
    
item: {
    backgroundColor: '#fff',
    padding: 15,
    justifyContent: 'space-around',
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center'
},
itemLeft: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row'

},

square: {
    backgroundColor: '#55BCF6',
    borderRadious: 5,
    marginRight: 15,
    width: 24,
    height: 24,
    opacity: 0.4
},
itemText: {
    width: '80%'
},
circular: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#55bcf6',
    width: 12,
    height: 12,
    
}

});

export default Task;