import { TouchableOpacity, View, Text } from "react-native";
import { THEME } from "../../theme";
import DuoInfo from "../DuoInfo";
import { styles } from "./style";
import { GameController } from "phosphor-react-native";

export interface DuoCardProps {
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export default function DuoCard({ data, onConnect }: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo label="Nome" value={data.name} />
            <DuoInfo
                label="Tempo de Jogo"
                value={`${data.yearsPlaying} ano(s)`}
            />
            <DuoInfo
                label="Disponibilidade"
                value={`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />
            <DuoInfo
                label="Chamada de Áudio"
                value={data.useVoiceChannel ? "sim" : "não"}
                ColorValue={
                    data.useVoiceChannel
                        ? THEME.COLORS.SUCCESS
                        : THEME.COLORS.ALERT
                }
            />

            <TouchableOpacity style={styles.button} onPress={onConnect}>
                <GameController color={THEME.COLORS.TEXT} size={20} />
                <Text style={styles.buttonTitle}>Conectar</Text>
            </TouchableOpacity>
        </View>
    );
}
