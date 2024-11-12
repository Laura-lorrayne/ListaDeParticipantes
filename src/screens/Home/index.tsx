import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import {Participant} from "../../components/Participant";

export default function Home(){

    const particpants =['julia', 'vini', 'diego', 'biro','teste', 'ana', 'luci', 'gabi'];

    function handleParticpantAdd(){
        if(particpants.includes('ana')){
           return Alert.alert("O Participante já foi cadastrado",'Já existe uma participante na lista com esse nome')
        }
    }
    function handleParticpantRemove(name:string){
        Alert.alert("Remover", `Deseja remover o participante ${name}?`,
            [
                {
                    text:'Sim',
                    onPress:()=>  Alert.alert("Deletado!")
                },
                {
                    text:'Não',
                    style:'cancel'
                }
            ]
        );
    }
    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2024
            </Text>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome do Participante"
                placeholderTextColor={"#6B6B6B"}
                keyboardType="numeric"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticpantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={particpants}
            keyExtractor={item =>item}
            renderItem={({item})=>(
                    <Participant 
                    name={item} 
                    key={item}
                    onRemove={()=>handleParticpantRemove(item)}/>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={()=>(
                <Text style={styles.listEmputText}>
                    Ninguém chegou no evento ainda ? adicione participantes a sua lista de presença
                </Text>
            )}
            />
        </View>
    );
}