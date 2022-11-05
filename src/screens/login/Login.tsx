import { useContext } from "react";
import { View, Button } from "react-native";

import { AuthContext } from "../../../AuthContext";

import styles from './Login.style';

const Login = ({navigation}) => {

    const authContext = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={() => {
                authContext.setAuth({authToken: 'Alex', refreshToken: 'refresh', authenticated: true});
            }} />
        </View>
    )
}

export default Login;