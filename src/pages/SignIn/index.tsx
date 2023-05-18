import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { StackTypes } from "../../routes";
import { useNavigation } from "@react-navigation/native";

const styles = SignInStyles;

export function SignIn() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email" style={styles.input} />
        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Sua senha" style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text
            style={styles.registerButtonText}
            onPress={() => navigation.navigate("Login")}
          >
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
