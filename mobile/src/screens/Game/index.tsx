import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logo from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

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

        <DuoCard />

      </SafeAreaView>
    </Background>

  );
}
