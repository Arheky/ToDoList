import React from "react";
import {View, TextInput, Button, TouchableOpacity, Text} from "react-native";
import styles from './SaveToDoList.style'

const SaveToDoList = props => {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Yapılacaklar.."
                placeholderTextColor={"white"}
                onChangeText={props.onChange}
                value={props.value}
            />
            <View style={styles.seperator} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={props.onButtonPress}
                style={styles.button}>
                    <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default SaveToDoList