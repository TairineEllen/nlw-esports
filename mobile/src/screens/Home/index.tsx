import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import logo from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame() {
    navigation.navigate('game');
  }

  useEffect(() => {
    fetch('https://d2b0-2804-14d-5480-8b4d-fc7a-9110-9bd8-7ced.sa.ngrok.io/games')
      .then(res => res.json())
      .then(data => setGames(data))
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <Image source={logo} style={styles.logo} />

        <Heading title='Encontre seu duo!' subtitle='Selecione o game que desejar jogar...' />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={handleOpenGame}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList} />

      </SafeAreaView>

    </Background>

  );
}