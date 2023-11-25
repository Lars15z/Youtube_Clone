import { StyleSheet, Text, View } from "react-native";
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.icon_name}>
                <AntDesign name="youtube" size={30} color="red" />
                <Text style={styles.name}>YouTube</Text>
            </View>

            <View style={styles.other_icons}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <Ionicons name="notifications-outline" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        justifyContent: "space-between"
    },
    icon_name: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 19,
        fontWeight: "700",
        marginLeft: 3,
    },
    other_icons: {
        width: 170,
        flexDirection: "row",
        justifyContent: "flex-end",
        justifyContent: "space-between",
        alignItems: "center",
    }
})