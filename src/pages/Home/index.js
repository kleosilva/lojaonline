import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import Shoes from '../../component/shoes';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../../assets/banner1.png')}
                style={styles.Image}
                />

            <View style={styles.textContainer}>
                <Text style={styles.text}>TÊNIS</Text>
                <Text style={[styles.text, { color: '#CECECF'} ]}>-</Text>
                <Text style={[styles.text, {color: '#CECECF'} ]}>MASCULINO</Text>
                <TouchableOpacity style={{position: 'absolute', right: 0, alignSelfie: 'center'}}>
                    <MaterialIcons
                      name="filter-list"
                      size={24}
                      color="#000"
                    />  
                </TouchableOpacity>
            </View>
        </View>

             <View style={styles.line}/>

             <ScrollView>
                 <Text style={styles.text}>LANÇAMENTOS</Text>

                 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                     <Shoes img={require('../../assets/NikeAirJordan.png')} cost="R$699,99" onClick={()=> navigation.navigate('Detail') }>
                       Nike Air Jordan 
                     </Shoes>
                     <Shoes img={require('../../assets/NikeAir.png')} cost="R$239,90" onClick={()=>  alert('CLICOU')}>
                       Nike Air 
                     </Shoes>
                 </View>

                 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                     <Shoes img={require('../../assets/NikeSBForce.png')} cost="R$499,99" onClick={()=> alert('CLICOU')}>
                       Nike SB Force 
                     </Shoes>
                     <Shoes img={require('../../assets/NikeShoes.png')} cost="R$349,99" onClick={()=> alert('CLICOU')}>
                       Nike Shoes 
                     </Shoes>
                 </View>

                 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                     <Shoes img={require('../../assets/NikeAirMax95.png')} cost="R$579,99" onClick={()=> alert('CLICOU')}>
                       Nike Air Max 95 
                     </Shoes>
                     <Shoes img={require('../../assets/NikeShox12Molas.png')} cost="R$399,99" onClick={()=> alert('CLICOU')}>
                       Nike Shox 12 Molas 
                     </Shoes>
                 </View>

             </ScrollView>   
    </View>                 
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'

    },
    header:{
        marginBottom: 8
    },
    image:{
        width: '100%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});