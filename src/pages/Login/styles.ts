import { StyleSheet } from "react-native";

export const SignInStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  header: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#38a69d",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerButtonText: {
    color: "#a1a1a1",
  },
  icon: {
    position: "absolute",
    right: 0,
  },
  password: {
    borderBottomWidth: 1,
  },
  passwordInput: {
    width: "100%",
  },
});
