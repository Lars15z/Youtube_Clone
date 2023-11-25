import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function CardShorts({ data }) {
    return (
        <View>
            <View style={styles.viewIconText}>
                <AntDesign style={{ paddingRight: 5 }} name="youtube" size={20} color="red" />

                <Text style={{ fontWeight: 800, fontSize: 17 }}>
                    Shorts
                </Text>
            </View>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                    <View>

                        <View style={{ padding: 5 }}>
                            <ImageBackground
                                source={{ uri: item.item.thumbnail }}
                                imageStyle={{ borderRadius: 10 }}
                                style={{ width: 180, height: 300 }}
                            >
                                <View style={{ padding: 10, alignItems: "flex-end", }}>
                                    <Entypo style={{}} name="dots-three-vertical" size={13} color="white" />
                                </View>

                                <View style={{ flex: 1, justifyContent: "flex-end", padding: 10 }}>
                                    <Text numberOfLines={2} style={styles.textTitle}>
                                        {item.item.title}
                                    </Text>

                                    <Text style={styles.textPreview}>
                                        {item.item.preview} previews
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewIconText: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingTop: 15,
        alignItems: "center"
    },
    textTitle: {
        color: "white",
        fontWeight: "500",
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    textPreview: {
        color: "white",
        fontWeight: "400",
        fontSize: 13,
        textShadowColor: "black",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
})