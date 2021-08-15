import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

const TextArea: React.FC<TextInputProps> = ({ ...rest }: TextInputProps) => {
  return <TextInput {...rest} style={styles.container} />;
};

export default TextArea;
