import React, {useState} from "react"
import {View, Text, TextInput, Vibration }  from "react-native"
import { TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc/"
import styles from "./style"


export default function Form(){

    const[height, setHeight]= React.useState(null);
    const[weight, setWeight]= React.useState(null);
    const[messageimc, setmessageimc]= useState("preencha o peso e alturaa");
    const[imc, setimc]= useState(null);
    const[textButton, setTextButton]= useState("calcular");
    const[errorMsg, setErrorMsg]= useState(null);

    function imccalculator(){
        return setimc((weight/(height*height)).toFixed(2));
    }
    function verifyNull(){
        if(imc==null){
            Vibration.vibrate();

            setErrorMsg("campo obrigatório*")
        }
    }

    function validationimc(){
        if(weight != null && height != null){
            imccalculator()
            setHeight(null)
            setWeight(null)
            setmessageimc("seu imc é igual: ")
            setTextButton("Calcular novamente")
            setErrorMsg(null)
            return

        }
        verifyNull()
        setimc(null)
        setTextButton("calcular")
        setmessageimc("preencha peso e altura")
        
    }

    return(

        <View style={styles.formContext}>
            <View style={styles.form}> 
            <Text style={styles.formLabel}>
                Altura
            </Text >
            <Text style={styles.errorMsg}>{errorMsg}</Text>
            <TextInput onChangeText={setHeight}
                       value={height} 
                       placeholder="Ex. 1.75"
                       keyboardType="numeric"
                       style={styles.formInput} />
                
                
            <Text style={styles.formLabel}>
                Peso
            </Text>
            <Text style={styles.errorMsg}>{errorMsg}</Text>
            <TextInput onChangeText={setWeight}
                       value={weight} 
                       placeholder="Ex. 75"
                       keyboardType="numeric"
                       style={styles.formInput}/>

                       
            <TouchableOpacity 
            style={styles.formCalc}
            onPress={() =>{validationimc()}}
                >
                        <Text style={styles.formButtom}>{textButton}</Text>
            </TouchableOpacity>     

        </View>
            <ResultImc messageresultimc = {messageimc} resultImc={imc}/>
        </View>
    );
}