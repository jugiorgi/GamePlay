import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Header from "../../components/Header";
import Background from "../../components/Background";
import CategorySelect from "../../components/CategorySelect";
import GuildIcon from "../../components/GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import SmallInput from "../../components/SmallInput";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import ModalView from "../../components/ModalView";
import Guilds from "../Guilds";
import { GuildProps } from "../../components/Guild";

const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setShowModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />

          <Text
            style={[
              styles.label,
              {
                marginLeft: 24,
                marginTop: 36,
                marginBottom: 18,
              },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />

          <View style={styles.form}>
            <RectButton onPress={() => setShowModal(true)}>
              <View style={styles.select}>
                {guild.icon ? <GuildIcon /> : <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>Dia e m??s</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descri????o</Text>

              <Text style={styles.caracteresLimit}>Max 100 cacteres</Text>
            </View>
            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />
            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView visible={showModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
