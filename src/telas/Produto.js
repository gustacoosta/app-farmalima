import React from 'react';
import { StyleSheet, StatusBar, Text, Image, Dimensions, View} from 'react-native';

import Topo from "../../assets/produtos/protetor_solar.webp";

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get('screen').width;



export default function Produto(){
    return <>
        <StatusBar/>
        <Image source={Topo} style={styles.topo}></Image>
        <Text style={styles.titulo}>Detalhes do produto</Text>
        <View style={styles.produto}>
            <Text style={styles.nome}>Protetor Solar Facial Bioré Perfect Milk UV FPS50 40ml</Text>
            <Text style={styles.descricao}> BIORÉ UV PERFECT MILK - Protetor solar Facial e corporal SPF 50 e alta proteção UVA com textura macia e toque seco para uma sensação confortável na pele. A tecnologia exclusiva traz partículas ultrafinas e filtros físicos UV em uma fórmula sem corantes. Esta emulsão leve espalha fácil na pele, oferecendo alta proteção UVA e UVB, sem deixar a sensação de pele oleosa ou comm toque pegajoso. Agitar bem o frasco antes da aplicação.</Text>
            <Text style={styles.preco}>R$ 74,29</Text>
        </View>
            
    </>
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 1000 / 1000 * width,
        marginTop: 35,

    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        padding: 16,

    },
    produto:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        textAlign: "center",
        fontSize: 22,
        color: "purple",
        fontWeight: "bold",
    },
    descricao:{
        textAlign: "justify",
        fontSize: 16,
        color: "#A3A3A3",
    },
    preco: {
        textAlign: "center",
        fontSize: 17,
        color: "black",
        fontWeight: "bold",
    },
  });