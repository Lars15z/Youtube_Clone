import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function CardVideo({ data }) {
    return (
        <ScrollView showsVerticalScrollIndicator style={{ height: "84.5%", }}>

            {data.map((item) => (
                <View style={styles.container} key={item.id}>
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={styles.thumbImage}
                    />

                    <View style={{ flexDirection: "row", padding: 10, }}>
                        <View style={{ paddingRight: 10 }}>
                            <Image
                                source={{ uri: item.profile }}
                                style={{ width: 38, height: 38, backgroundColor: 'black', borderRadius: 50 }}
                            />
                        </View>

                        <View style={{ width: "80%" }} >
                            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.subTitle}>{item.channel}</Text>

                                <Text style={styles.subTitle}> · </Text>

                                <Text style={styles.subTitle}>{item.preview}</Text>

                                <Text style={styles.subTitle}> · </Text>

                                <Text style={styles.subTitle}>há {item.date}</Text>
                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Entypo name="dots-three-vertical" size={13} color="black" />
                        </View>
                    </View>
                </View>
            ))}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    thumbImage: {
        width: 415,
        height: 230
    },
    title: {
        fontWeight: "500",
        fontSize: 16
    },
    subTitle: {
        color: "grey",
        fontSize: 13
    }
})