import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, FlatList } from 'react-native';
import Header from '../Header/Header'
import styles from './ToDoList.style'
import SaveToDoList from '../SaveToDoList/SaveToDoList';
const ToDoList = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([
        {
            id: 0,
            task: 'Çöpler atılacak',
            isCompleted:false
        },
        {
            id: 1,
            task: 'Ev temizlenecek',
            isCompleted:false
        },
    ]);
    const [completedTask, setCompletedTask] = useState([])
    const renderToDoList = ({item}) =>
    <Header task={item.task} isCompleted={item.isCompleted} onPress={() => onPress(item)}
    onLongPress = {() => onLongPress(item)}
    />
    const onPress = item => {
        const newTodoList = todo.map(task => task.id === item.id ? {...task, isCompleted: !task.isCompleted} : task)
        setTodo(newTodoList)
    }
    const onLongPress = item => {
        const newTodoList = todo.filter(task => task.id !== item.id && task)
        setTodo(newTodoList)
    }
    useEffect(() => {
        const completedList = todo.filter(todo => todo.isCompleted === true)
        setCompletedTask(completedList)
    }, [todo])
   const counter = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Yapılacaklar</Text>
            <Text style={styles.headerCounter}>{todo.length-completedTask.length}</Text>
        </View>
    )
   }
   const grabText = text => {
    setInput(text)
   }
   const saveText = () => {
    if(input === "") return alert("Lütfen iş giriniz!")
    setTodo([...todo,{"id":todo.length.toString(), "task": input, "isCompleted":false}])
    grabText("")
   }
   return(
    <View style={styles.container}>
        <FlatList
        ListHeaderComponent={counter}
        keyExtractor={item => item.id}
        data={todo}
        renderItem={renderToDoList}
        />
        <SaveToDoList value={todo} onChange={grabText} onButtonPress={saveText} />
    </View>
   )
}
export default ToDoList;