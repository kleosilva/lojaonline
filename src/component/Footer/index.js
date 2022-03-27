import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../shoes';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ VAI GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{marginHorizontal: 10}}>
                  <Shoes img={require('../../assets/NikeSBForce.png')} cost="499,99">
                      Nike SB Force
                  </Shoes>
              </View>
              <View style={{marginHorizontal: 10}}>
                  <Shoes img={require('../../assets/NikeShoes.png')} cost="349,99">
                      Nike Shoes
                  </Shoes>
              </View>
              <View style={{marginHorizontal: 10}}>
                  <Shoes img={require('../../assets/NikeAirMax95.png')} cost="579,99">
                      Nike Air Max 95
                  </Shoes>
              </View>
          </ScrollView>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
   title:{
       fontSize: 24,
       marginVertical: '2%',
       paddingHorizontal: '2%'
   }  
})