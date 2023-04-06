import { View, Text } from "react-native"
import { globalStyles } from "../styles/global"

export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params
  // console.log(title, body, rating)

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
      {/* <Text>{JSON.parse(JSON.stringify(title))}</Text> */}
    </View>
  )
}
