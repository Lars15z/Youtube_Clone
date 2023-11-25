import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo, MaterialIcons, MaterialCommunityIcons, Fontisto, Ionicons } from '@expo/vector-icons';

export default function Shorts() {
    return (
        <View style={{ flex: 1 }}>

            <ImageBackground
                source={{ uri: 'https://i.ytimg.com/vi/sK9oXstDkBc/maxresdefault.jpg' }}
                style={{ width: "100%", height: 850 }}
            >
                <View style={styles.viewHeader}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <AntDesign style={{ paddingRight: 30 }} name="search1" size={28} color="white" />

                        <AntDesign style={{ paddingRight: 30 }} name="camerao" size={28} color="white" />

                        <Entypo style={{}} name="dots-three-vertical" size={17} color="white" />
                    </View>
                </View>

                <View style={{ flexDirection: "row", height: "65%" }}>
                    <View style={{ width: "75%", height: "90%", justifyContent: "flex-end", padding: 15 }}>
                        <View style={styles.viewInfo}>
                            <Image
                                source={{ uri: 'https://yt3.googleusercontent.com/ytc/APkrFKY7sDoOVFnhTD0cc-uYL_v36bsp0058IjJETN3Q0Q=s176-c-k-c0x00ffffff-no-rj-mo' }}
                                style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10 }}
                            />

                            <Text style={styles.textFin}>@VoceSabia</Text>
                        </View>

                        <Text style={styles.textTiSon}>O 1º Video do Youtube??</Text>

                        <View style={styles.viewInfo}>
                            <Ionicons style={{ paddingRight: 5 }} name="musical-notes-outline" size={20} color="white" />
                            <Text style={styles.textTiSon}>Som original</Text>
                        </View>
                    </View>

                    <View style={styles.viewReactions}>
                        <View style={styles.viewIcons}>
                            <View>
                                <AntDesign name="like1" size={30} color="#4b7ffa" />
                                <Text style={styles.textFin}>300M</Text>
                            </View>

                            <View style={styles.viewIcons}>
                                <AntDesign name="dislike1" size={30} color="white" />
                                <Text style={styles.textFin}>Não gostei</Text>
                            </View>

                            <View style={styles.viewIcons}>
                                <MaterialIcons name="insert-comment" size={30} color="white" />
                                <Text style={styles.textFin}>50mil</Text>
                            </View>

                            <View style={styles.viewIcons}>
                                <MaterialCommunityIcons name="share" size={30} color="white" />
                                <Text style={styles.textFin}>Com..tilhar</Text>
                            </View>

                            <View style={styles.viewIcons}>
                                <Fontisto name="arrow-swap" size={30} color="white" />
                                <Text style={styles.textFin}>Remix</Text>
                            </View>

                            <Image
                                source={{ uri: 'https://yt3.googleusercontent.com/ytc/APkrFKY7sDoOVFnhTD0cc-uYL_v36bsp0058IjJETN3Q0Q=s176-c-k-c0x00ffffff-no-rj-mo' }}
                                style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 10, marginTop: 30 }}
                            />
                        </View>
                    </View>
                </View>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    viewIcons: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30
    },
    viewInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    textFin: {
        color: "white",
        fontWeight: "500"
    },
    textTiSon: {
        color: 'white',
    },
    viewHeader: {
        width: "100%",
        height: "35%",
        alignItems: "flex-end",
        paddingTop: 10,
        paddingHorizontal: 20
    },
    viewReactions: {
        width: "25%",
        height: "80%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: 20,
        padding: 1
    }
})