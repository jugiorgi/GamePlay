import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import Header from "../../components/Header";
import Background from "../../components/Background";
import ListHeader from "../../components/ListHeader";

import BannerImg from "../../assets/banner.png";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import Member from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";

const AppointmentDetails: React.FC = () => {
  const members = [
    {
      id: "1",
      username: "Clarke",
      avatar_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU3jDADQ8TvWqb9n32MYh24pGHmbSluQVhpwdwYYdXZ8MsxHcBBiTyStd01oO_PUJwyY&usqp=CAU",
      status: "online",
    },
    {
      id: "2",
      username: "Octavia",
      avatar_url:
        "https://ninielsbox.files.wordpress.com/2017/10/octavia12.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenge sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};

export default AppointmentDetails;
