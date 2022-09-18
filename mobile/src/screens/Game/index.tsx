import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logo from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import { DuoMatch } from '../../components/DuoMatch'

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();
  
  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`https://2991-2804-14d-5480-8b4d-fc7a-9110-9bd8-7ced.sa.ngrok.io/ads/${adsId}/discord`)
    .then(res => res.json())
    .then(data => setDiscordDuoSelected(data.discord))
  }

  useEffect(() => {
    fetch(`https://2991-2804-14d-5480-8b4d-fc7a-9110-9bd8-7ced.sa.ngrok.io/games/${game.id}/ads`)
      .then(res => res.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20}/>
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <View style={styles.right}/>
        </View>

        <Image source={{ uri: game.banner }} style={styles.cover} resizeMode='cover' />

        <Heading title={game.title} subtitle='Conecte-se e comece a jogar!'/>

      <FlatList
        data={duos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <DuoCard data={item} onConnect={() => getDiscordUser(item.id)}/>
        )}
        horizontal
        contentContainerStyle={[ duos.length > 0 ? styles.containerList : styles.emptyListContent]}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Não há anúncios publicados ainda</Text>
        )}
      />
      <DuoMatch visible={discordDuoSelected.length > 0} discord={discordDuoSelected} onClose={() => setDiscordDuoSelected('')} />
      </SafeAreaView>
    </Background>
  );
}
