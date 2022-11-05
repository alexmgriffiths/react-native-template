import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../../AuthContext";

export default function Home() {

    const authContext = useContext(AuthContext);

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Logout" onPress={() => authContext.logout()} />
        </View>
    )
}