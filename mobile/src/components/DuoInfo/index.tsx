import { View, Text, ColorValue } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface Props {
    label: string;
    value: string;
    ColorValue?: ColorValue;
}

export default function DuoInfo({
    label,
    value,
    ColorValue = THEME.COLORS.TEXT,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label} numberOfLines={1}>
                {label}
            </Text>
            <Text
                style={[styles.value, { color: ColorValue }]}
                numberOfLines={1}
            >
                {value}
            </Text>
        </View>
    );
}
