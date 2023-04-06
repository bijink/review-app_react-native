import { View, Text, Button } from "react-native"
import { globalStyles } from "../styles/global"

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Review")
    // navigation.push("Review")
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screens</Text>
      <Button title="see review" onPress={pressHandler} />
    </View>
  )
}
