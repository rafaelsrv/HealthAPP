import React from "react"
import {View, Text, TouchableOpacity, Share} from "react-native"
import styles from "./style"

export default function ResultImc(props) {

    const onShare = async()=>{
        const result = await Share.share({message:"Meu IMC hoje é:" +props.resultImc,})
    }
    return(
        
        <View style={styles.formaInfo}>
            
            <Text style={styles.formaInfo}>{props.messageresultimc}</Text>
            <Text style={styles.resultImc}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                
                <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.sharedText}> Shared </Text>
                </TouchableOpacity>
             </View> 
            </View>
                
                
        
    );
}