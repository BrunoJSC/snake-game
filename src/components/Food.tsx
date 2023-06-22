import { StyleSheet, Text } from "react-native";
import { Coordinate } from "../types/GestureEventType";

export default function Food({ x, y }: Coordinate): JSX.Element {
  function getRandomFruitEmoji() {
    const fruitEmojis = ["🍎", "🍊", "🍋", "🍇", "🍉", "🍓", "🍑", "🍍"];
    const randomIndex = Math.floor(Math.random() * fruitEmojis.length);
    return fruitEmojis[randomIndex];
  }

  return <Text style={[{ top: y * 10, left: x * 10 }, styles.food]}>🍎</Text>;
}

const styles = StyleSheet.create({
  food: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 7,
  },
});
