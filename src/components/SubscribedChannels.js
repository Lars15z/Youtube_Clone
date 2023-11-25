import { FlatList, Image, Text, View } from "react-native";

export default function SubscribedChannels({ data }) {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: 5 }}
                    overScrollMode="never"
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => (
                        <View style={{ paddingVertical: 10, paddingHorizontal: 4, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                style={{ width: 70, height: 70, borderRadius: 50 }}
                                source={{ uri: item.item.profile }}
                            />

                            <Text numberOfLines={1} style={{ color: "grey", paddingVertical: 10, width: 80, paddingLeft: 10 }}>{item.item.channel}</Text>
                        </View>
                    )}
                />

                <View style={{ width: 80, height: 80, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "black" }}>Todos</Text>
                </View>
            </View>
        </View>
    )
}