import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';

import imgFundo from '../../assets/fundo-xcloud.png';
import img1 from '../../assets/xcloud-2.png';
import estilos from './estilos';

export default function TelaNuvem () {
  return (
    <ImageBackground source={ imgFundo } style={ estilos.container }>
      <Text style={ estilos.titulo }>Xbox Cloud Gaming</Text>
      <Text style={ estilos.subtitulo }>Serviço de streaming de jogos</Text>
      <Text style={ estilos.paragrafo }>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
      <Text style={ estilos.paragrafo }>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
      <Text style={ estilos.paragrafo }>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
      <Image source={ img1 } style={ estilos.img } />
    </ImageBackground>
  )
}