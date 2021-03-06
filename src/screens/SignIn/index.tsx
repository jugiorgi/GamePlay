import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import Background from "../../components/Background";

import { styles } from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com Discord"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </Background>
  );
};

export default SignIn;
