import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './Header.style';

const Header = props => {
    let containerStyle = "";
    let textStyle = "";
    if(props.isCompleted === false) {
        containerStyle = styles.container
        textStyle = styles.todoText
    }else {
        containerStyle = styles.completedContainer
        textStyle = styles.completedText
    }
    return (
        <View style={containerStyle}>
            <TouchableHighlight
            underlayColor="gray"
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            >
                <Text style={textStyle}>{props.task}</Text>
            </TouchableHighlight>
        </View>

    )
}
export default Header