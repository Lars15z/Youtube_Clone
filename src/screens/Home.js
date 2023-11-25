import { ScrollView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import Header from "../components/Header";
import ChipBar from "../components/ChipBar";
import CardVideo from "../components/CardVideo";
import CardShorts from "../components/CardShorts";
import DataVideo from "../API/DataVideo";

export default function Home() {

    // Dados dos Videos
    const [listDataVideo, setListDataVideo] = useState([]);
    const [listDataShorts, setListDataShorts] = useState([]);

    // Lista ChipBar
    const list = [
        {
            id: '1',
            title: 'Tudo',
            test: ''
        },
        {
            id: '2',
            title: 'Novidades para você',
            test: ''
        },
        {
            id: '3',
            title: 'Inscrito',
            test: ''
        },
        {
            id: '4',
            title: 'Jogos',
            test: ''
        },
        {
            id: '5',
            title: 'Música',
            test: ''
        },
        {
            id: '6',
            title: 'Teatro',
            test: ''
        }
    ]

    useEffect(() => {
        // Pega os Dados dos Videos de DataVideo
        const loadAll = async () => {
            let listVideo = await DataVideo.getDataVideo();
            let listShorts = await DataVideo.getDataShorts();
            setListDataVideo(listVideo);
            setListDataShorts(listShorts);
        }

        loadAll();
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never" style={styles.container}>

            <View>
                <Header />

                <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never" style={{ paddingLeft: 15, paddingBottom: 10 }}>
                    <Ionicons name="ios-compass-outline" size={18} color="black" style={styles.chipBarText} />
                    <ChipBar name={list} />
                </ScrollView>
            </View>

            <ScrollView>
                <View>
                    <CardShorts data={listDataShorts} />
                </View>

                <View>
                    <CardVideo data={listDataVideo} />
                </View>
            </ScrollView>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    chipBarText: {
        backgroundColor: "#0000000D",
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 5,
        marginRight: 10
    }
})