import React, { ReactNode } from "react";
import { Modal, ModalProps, View } from "react-native";
import Background from "../Background";

import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
};

const ModalView: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
};

export default ModalView;
