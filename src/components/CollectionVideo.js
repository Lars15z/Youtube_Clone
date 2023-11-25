import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function CollectionVideo({ data, name }) {

    return (
        <View style={{ paddingVertical: 25 }}>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, paddingBottom: 15 }}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.viewalltitle}>
                    <Text style={styles.alltitle}>Ver tudo</Text>
                </View>

            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                style={{ paddingHorizontal: 5 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                renderItem={(item) => (
                    <View style={{ paddingHorizontal: 10 }}>
                        <Image style={{ width: 160, height: 90, borderRadius: 10 }} source={{ uri: item.item.thumbnail }} />
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.videotitle} numberOfLines={2}>{item.item.title}</Text>
                                <Text style={styles.channeltitle}>{item.item.channel}</Text>
                            </View>
                            <Entypo name="dots-three-vertical" size={13} color="black" style={{ paddingTop: 10 }} />
                        </View>

                    </View>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    viewalltitle: {
        borderWidth: 1.5,
        borderColor: "#0000000D",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 32
    },
    alltitle: {
        paddingHorizontal: 10,
        fontSize: 13,
        fontWeight: "bold"
    },
    videotitle: {
        fontWeight: "400",
        fontSize: 18,
        width: 150

    },
    channeltitle: {
        fontSize: 13,
        color: "#0000009D"
    }
})