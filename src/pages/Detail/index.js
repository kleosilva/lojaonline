import { Anton_400Regular } from '@expo-google-fonts/anton';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({ navigation }) {
    
    navigation.setOptions({
        headerTitle: 'Nike Air Jordan'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
            source={require('../../assets/NikeAirJordandetail.png')}
            style={styles.Image}
            resizeMode="cover"
            />

            <View>
                <View> 
                    <Text style={[styles.title, ]}>R$699,99</Text>
                </View>
                <View>
                    <Text style={[styles.title, ]}>Nike Air Jordan</Text>
                </View>
                    

            <View style={styles.dotContainer}>
                 <Dot color="#2379f4" />
                 <Dot color="#fb6e53" />
                 <Dot color="#ddd" />
                 <Dot color="#000" />   
                </View>

            <View style={{flexDirection: 'row', width: '100%'}}>
                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                   <SizeButton bgColor="#17181a" color="#FFF"> 40</SizeButton>
                   <SizeButton>37</SizeButton>
                   <SizeButton>39</SizeButton>
                   <SizeButton>44</SizeButton> 
            </ScrollView> 
                </View>

                <View style={styles.textContent}>
                  <Text style={styles.textTitle}>
                     NikeAirJordan
                  </Text>
                  <Text style={styles.Content}>
                  O Nike Air Jordan combina o estilo cobiçado dos primeiros sneakers conceito de Michael Jordan com um sistema de calçamento rápido e fácil com uma mão.
                  </Text>
                  <Text style={styles.textList}>
                      - Categoria: Amortecimento
                  </Text>
                  <Text style={styles.textList}>
                      - Material: Mesh
                  </Text>   
                </View>

                <Button/>

                <View style={styles.line} />

                <Footer/>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'

    },
    Image:{
        width: '100%'

    },
    title: {
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        paddingHorizontal: '2%'
           
    },
    dotContainer:{
        flexDirection: 'row',
        marginVertical: '7%'
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        marginHorizontal: '2%'
    },
    textTitle: {
        fontSize: 22,
        marginVertical: '2%',
    },
    textList:{
        fontSize: 16,
        lineHeight: 25,
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
    }
});