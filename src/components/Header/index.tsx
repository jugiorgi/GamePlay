import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  title: string;
  action?: ReactNode;
};

const Header: React.FC<Props> = ({ title, action }: Props) => {
  const navigation = useNavigation();

  const { secondary40, secondary100, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
};

export default Header;
