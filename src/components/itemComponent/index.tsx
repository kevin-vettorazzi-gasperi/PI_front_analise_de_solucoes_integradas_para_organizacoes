import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

export type ItemProps = {
  description: string,
  _id: string,
  onPressOnLeftButton: () => void
  onPressOnItem: () => void
};

export const ItemComponent = (item: ItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={item.onPressOnItem}>
        <View style={styles.viewText}>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={item.onPressOnLeftButton}
        style={styles.buttonContainer}>
        <View style={styles.viewButton}></View>
      </TouchableOpacity>
    </View>
  )
};

