import React from "react";
import { Text, View } from "react-native";
import Avatar from "../Avatar";

import { styles } from "./styles";

const Profile: React.FC = () => {
  const urlImage =
    "https://i.pinimg.com/originals/d9/b4/fa/d9b4faf32cd2950984adbf97b9281c91.jpg";
  return (
    <View style={styles.container}>
      <Avatar urlImage={urlImage} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Raven</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
