import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign, FontAwesome5, Ionicons, Octicons, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import CollectionVideo from "../components/CollectionVideo";
import DataVideo from "../API/DataVideo";

export default function Profile() {

    // Dados dos videos  
    const [listDataVideo, setListDataVideo] = useState([]);

    const list = [
        {
            id: '1',
            title: 'Alternar conta',
            nameIcon: <MaterialIcons name="switch-account" size={18} color="black" />
        },
        {
            id: '2',
            title: 'Conta do Google',
            nameIcon: <AntDesign name="google" size={18} color="black" />
        },
        {
            id: '3',
            title: 'Ativar modo de navegação anônima',
            nameIcon: <MaterialCommunityIcons name="incognito-circle" size={18} color="black" />
        }
    ]

    useEffect(() => {
        // Pega os Dados dos Videos de DataVideo
        const loadAll = async () => {
            let listVideo = await DataVideo.getDataVideo();
            setListDataVideo(listVideo);
        }

        loadAll();
    }, [])


    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
            <View style={{ flex: 1, padding: 15, flexDirection: "row", justifyContent: "flex-end" }}>
                <View style={styles.other_icons}>

                    <FontAwesome5 name="chromecast" size={24} color="black" />
                    <Ionicons name="notifications-outline" size={24} color="black" />
                    <AntDesign name="search1" size={24} color="black" />
                    <Ionicons name="settings-outline" size={24} color="black" />

                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={{ uri: 'https://images8.alphacoders.com/130/1305233.png' }} style={{ width: 80, height: 80, borderRadius: 50, margin: 15 }} />

                <View style={{}}>
                    <Text style={{ fontSize: 25 }}>Lrts1</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text>@LRts</Text>
                        <Text> ° </Text>
                        <Text>Ver Canal</Text>
                    </View>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never" style={styles.container}>
                {list.map((key) => (
                    <View style={styles.chipBar} key={key.id}>
                        <View style={styles.viewInfoVideo}>
                            { /*Pega os Icons do List*/ key.nameIcon}
                            <Text style={styles.chipBarText}>
                                {key.title}
                            </Text>
                        </View>

                    </View>
                ))}
            </ScrollView>
            <View>
                <CollectionVideo data={listDataVideo} name="Histórico" />
                <CollectionVideo data={listDataVideo} name="Playlist" />
            </View>

            <View style={styles.viewitens}>
                <View style={styles.subitens}>
                    <Octicons name="video" size={24} color="black" />
                    <Text style={styles.title}>Seus vídeos</Text>
                </View>

                <View style={styles.subitens}>
                    <Octicons name="download" size={24} color="black" />

                    <View>
                        <Text style={styles.title}>Download</Text>
                        <Text style={{ fontSize: 15, paddingHorizontal: 30, fontWeight: "400", color: "#0000009D" }}>0 vídeo</Text>
                    </View>
                </View>

                <View style={styles.subitens}>
                    <Entypo name="clapperboard" size={24} color="black" />
                    <Text style={styles.title}>Seus filmes</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingRight: 25,
    },
    other_icons: {
        width: 170,
        flexDirection: "row",
        justifyContent: "flex-end",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    chipBar: {
        paddingHorizontal: 5,
    },
    chipBarText: {
        paddingHorizontal: 12,
        paddingVertical: 9,
    },
    viewitens: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#0000000D",
        marginBottom: 10,
        paddingHorizontal: 30
    },
    subitens: {
        flexDirection: "row",
        paddingVertical: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 17,
        paddingHorizontal: 30,
        fontWeight: "500"
    },
    viewInfoVideo: {
        flexDirection: "row",
        paddingHorizontal: 5,
        backgroundColor: "#0000000D",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30
    }
})