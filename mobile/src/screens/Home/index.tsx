import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

import logoImg from "../../assets/logo-nlw-esports.png";

import api from "../../config/apiConfig";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

export function Home() {
    const [games, setGames] = useState<GameCardProps[]>([]);
    const navigation = useNavigation();

    function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
        navigation.navigate("game", { id, title, bannerUrl });
    }

    useEffect(() => {
        api.get("/games").then((games) => {
            setGames(games.data);
        });
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image source={logoImg} style={styles.logo} />
                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    data={games}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={styles.contentList}
                />
            </SafeAreaView>
        </Background>
    );
}
