import { View, Image, Pressable, StyleSheet } from "react-native";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default PlaceItem;
