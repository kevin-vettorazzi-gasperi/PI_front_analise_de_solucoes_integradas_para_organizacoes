import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const LoadComponent = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator color='red' size={"large"} />
            <Text>Carregando...</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})