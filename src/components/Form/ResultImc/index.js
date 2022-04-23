import React from "react"
import {View, Text} from "react-native"
import styles from "./style"

export default function ResultImc(props) {
    return(

        <View style={styles.formaInfo}>
            
            <Text style={styles.formaInfo}>{props.messageresultimc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
        </View>
    );
}