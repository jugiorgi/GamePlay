import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from "react-native";

import DiscordImg from "../../assets/discord.png";

import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

const ButtonIcon: React.FC<Props> = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default ButtonIcon;
