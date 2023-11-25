import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import ChipBar from "../components/ChipBar";
import SubscribedChannels from "../components/SubscribedChannels";
import CardVideo from "../components/CardVideo";
import CardShorts from "../components/CardShorts";
import { useEffect, useState } from "react";
import DataVideo from "../API/DataVideo";


export default function Registrations() {

    // Dados dos videos
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
            title: 'Hoje',
            test: ''
        },
        {
            id: '3',
            title: 'Ao vivo',
            test: ''
        },
        {
            id: '4',
            title: 'Continuar assistindo',
            test: ''
        },
        {
            id: '5',
            title: 'Não assistidos',
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
            let listShots = await DataVideo.getDataShorts();

            setListDataVideo(listVideo);
            setListDataShorts(listShots);
        }

        loadAll();
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
            <Header />

            <SubscribedChannels data={listDataVideo} />

            <View style={{ paddingHorizontal: 10 }}>
                <ChipBar name={list} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <CardShorts data={listDataShorts} />
                </View>

                <CardVideo data={listDataVideo} />
            </ScrollView>
        </ScrollView>
    )
}