import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <Text>{rating}</Text>
      </Card>
    </View>
  );
}
