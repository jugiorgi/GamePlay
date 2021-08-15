import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

const SmallInput: React.FC<TextInputProps> = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput {...rest} style={styles.container} keyboardType="numeric" />
  );
};

export default SmallInput;
