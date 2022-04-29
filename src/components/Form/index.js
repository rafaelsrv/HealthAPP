import React, {Fragment, useState} from "react"
import {
    View,
    Text,
    TextInput,
    Vibration,
    Keyboard,
    Pressable, 
        }  from "react-native"
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
        let heightFormat = height.replace(",",".")
        return setimc((weight/(heightFormat*heightFormat)).toFixed(2));
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

        }
        else{
        verifyNull()
        setimc(null)
        setTextButton("calcular")
        setmessageimc("preencha peso e altura")
        }
    }

    return(

        
            <View style={styles.formContext}>
                {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Fragment>     
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
            onPress={() =>{validationimc();}}
                >
                    <Text style={styles.formButtom}>{textButton}</Text>
            </TouchableOpacity>     
        </Fragment>               
        </Pressable>
      )  :
        <View style={styles.exibitionResultImc}>

            <ResultImc messageresultimc = {messageimc} resultImc={imc}/>
            <TouchableOpacity 
            style={styles.formCalc}
            onPress={() =>{validationimc();}}
                >
                        <Text style={styles.formButtom}>{textButton}</Text>
            </TouchableOpacity>
        
        </View>
        }   
        </View>
    )}
