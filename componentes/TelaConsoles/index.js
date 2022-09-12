import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

import imgConsole1 from '../../assets/console-1.png';
import imgConsole2 from '../../assets/console-2.png';
import estilos from './estilos';

export default function TelaConsoles () {
  return (
    <ScrollView style={ estilos.container}>
      <View style={ estilos.box }>
        <Image source={ imgConsole1 } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES S</Text>
        <Text style={ estilos.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance</Text>
      </View>
      
      <View style={ estilos.box }>
        <Image source={ imgConsole2 } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES X</Text>
        <Text style={ estilos.subtitulo }>O Xbox mais rápido e poderoso de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
      </View>
    </ScrollView>
  )
}