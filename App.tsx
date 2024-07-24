import { ThemeProvider } from "styled-components/native"
import { Home } from "./src/screens"
import theme from "./src/theme"
import { StatusBar } from "expo-status-bar"
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native"
export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
        <Home />
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  )
}