import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ChipBar({ name }) {

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never" style={styles.container}>

            {name.map((key) => (
                <View style={styles.chipBar} key={key.id}>
                    <Text style={styles.chipBarText}>
                        {key.title}
                    </Text>
                </View>
            ))}

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingRight: 25
    },
    chipBar: {
        paddingHorizontal: 5
    },
    chipBarText: {
        backgroundColor: "#0000000D",
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 10
    }
})