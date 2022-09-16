import { useEffect } from 'react';
import { View, Image, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GAMES } from '../../utils/games';
import { GameCard } from '../../components/GameCard';

export function Home() {
  useEffect(() => {
    fetch('https://d2b0-2804-14d-5480-8b4d-fc7a-9110-9bd8-7ced.sa.ngrok.io/games')
    .then(res => res.json())
    .then(data => console.log('Entrou', data))
    .catch(error => console.log('Aqui', error))
  }, []) 
  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo}/>

      <Heading title='Encontre seu duo!' subtitle='Selecione o game que desejar jogar...' />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id} 
        renderItem={({ item }) => (
          <GameCard data={item} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}/>

      

    </View>
  );
}