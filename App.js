import React from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {
  
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task]);
  setTask(null);
}

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}

  return (
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>
         Today's Task
      </Text>
      <View style = {styles.items}>
      {/* This is where the tasks will be */}
      {/* we will create a reusable component for the task items */}

      {
        taskItems.map((item, index) =>{
            return(
            <TouchableOpacity key={index} onPress = {() =>completeTask(index)}>
            <Task text = {item}/>
            </TouchableOpacity>
            )
        })
      }
     
      </View>
     </View>

<KeyboardAvoidingView 
// behavior = {platform.OS === "ios" ? "padding" : "height"}
style = {styles.writeTaskWrapper} 
>
<TextInput 
style = {styles.input} 
placeholder = {"write a task"} value = {task} onChangeText={text =>setTask(text)}/>
<TouchableOpacity onPress = {() => handleAddTask()}>
  <View style = {styles.addWrapper}>
    <Text style = {styles.addText}>+</Text>
  </View>
</TouchableOpacity>
</KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    },

    tasksWrapper: {
      padding: 80,
      paddingVertical: 20
    },
    sectionTitle: {
     fontSize: 24,
     fontWeight: 'bold'
    },
    items: {
     marginTop: 30
    },
    writeTaskWrapper: {
  position: 'absolute',
  flexDirection: 'row',
  bottom : 60,
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center'
    },
    input: {
      width: 250,
      borderWidth: 1,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderRadius: 60,
      borderColor: '#c0c0c0',
      backgroundColor:'#fff',

    },
    addWrapper: {
      height: 60,
      width: 60,
      borderRadius: 60,
      backgroundColor: '#fff',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#c0c0c0'

    },

    addText: {

    }

});
