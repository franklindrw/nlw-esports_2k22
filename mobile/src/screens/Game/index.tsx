import { useEffect, useState } from "react";
import api from "../../config/apiConfig";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { Entypo } from "@expo/vector-icons";
import DuoCard, { DuoCardProps } from "../../components/DuoCard";
import { Heading } from "../../components/Heading";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-nlw-esports.png";
import DuoMatch from "../../components/DuoMatch";

export function Game() {
    const [Duos, setDuos] = useState<DuoCardProps[]>([]);
    const [discordDuoSelected, setDiscordDuoSelected] = useState("");

    const route = useRoute();
    const navigation = useNavigation();
    const games = route.params as GameParams;

    function handleGoBack() {
        navigation.goBack();
    }

    async function getDiscorduser(adsId: string) {
        api.get(`/ads/${adsId}/discord`).then((discord) => {
            setDiscordDuoSelected(discord.data.discord);
        });
    }

    useEffect(() => {
        api.get(`/games/${games.id}/ads`).then((ads) => {
            setDuos(ads.data);
        });
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image source={logoImg} style={styles.logo} />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: games.bannerUrl }}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <Heading
                    title={games.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <FlatList
                    data={Duos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <DuoCard
                            data={item}
                            onConnect={() => getDiscorduser(item.id)}
                        />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={
                        Duos.length > 0
                            ? styles.contentList
                            : styles.emptyListContent
                    }
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados ainda.
                        </Text>
                    )}
                />

                <DuoMatch
                    visible={discordDuoSelected.length > 0}
                    discord={discordDuoSelected}
                    onClose={() => setDiscordDuoSelected("")}
                />
            </SafeAreaView>
        </Background>
    );
}
