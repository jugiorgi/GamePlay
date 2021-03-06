import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import Appointment from "../../components/Appointment";
import Background from "../../components/Background";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListDivider from "../../components/ListDivider";
import ListHeader from "../../components/ListHeader";
import Profile from "../../components/Profile";
import { appointments } from "../../utils/appointments";

import { styles } from "./styles";

const Home: React.FC = () => {
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={() => navigation.navigate("AppointmentCreate")} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => navigation.navigate("AppointmentDetails")}
            />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
};

export default Home;
