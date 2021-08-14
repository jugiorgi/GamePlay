import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

const GuildIcon: React.FC = () => {
  const urlImage =
    "https://media.pocketgamer.biz/2021/5/110514/discord-new-logo-2021-r225x.jpg";
  return (
    <Image style={styles.image} source={{ uri: urlImage }} resizeMode="cover" />
  );
};

export default GuildIcon;
