import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,

} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton}>
                    <MaterialIcons name="close" size={24} color="black" />
                </TouchableOpacity>

                {/* Login Header */}
                <Text style={styles.header}>Login</Text>
                <Text style={styles.subHeader}>Securely login to your account</Text>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <FontAwesome name="envelope" size={20} color="#B0B0B0" style={styles.icon} />
                    <TextInput
                        placeholder="Email address"
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(e) => setEmail(e)}
                        value={email}
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                    <FontAwesome name="lock" size={20} color="#B0B0B0" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={!passwordVisible}
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                    />
                    <TouchableOpacity
                        onPress={() => setPasswordVisible(!passwordVisible)}
                        style={styles.eyeIcon}
                    >
                        <FontAwesome
                            name={passwordVisible ? "eye-slash" : "eye"}
                            size={20}
                            color="#B0B0B0"
                        />
                    </TouchableOpacity>
                </View>

                {/* Remember Me */}
                <View style={styles.rememberMeContainer}>
                    {/* <CheckBox
                    value={rememberMe}
                    onValueChange={setRememberMe}
                    style={styles.checkbox}
                /> */}
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </View>

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                </TouchableOpacity>

                {/* Forgot Password */}
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password</Text>
                </TouchableOpacity>

                {/* OR Divider */}
                <Text style={styles.orText}>- OR Continue with -</Text>

                {/* Social Login Buttons */}
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="google" size={20} color="#4285F4" />
                        <Text style={styles.socialButtonText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="facebook" size={20} color="#3b5998" />
                        <Text style={styles.socialButtonText}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                {/* Sign Up */}
                <Text
                    onPress={() => navigation.replace("Register")}
                    style={styles.signUpText}>
                    Create An Account <Text style={styles.signUpLink}>Sign Up</Text>
                </Text>

                {/* Terms and Privacy */}
                <Text style={styles.termsText}>
                    By clicking Continue, you agree to our{" "}
                    <Text style={styles.link}>Terms of Service</Text> and{" "}
                    <Text style={styles.link}>Privacy Policy</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    closeButton: {
        alignSelf: "flex-start",
        marginBottom: 10,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 5,
    },
    subHeader: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 5,
    },
    rememberMeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
    },
    rememberMeText: {
        fontSize: 16,
        color: "#666",
    },
    loginButton: {
        backgroundColor: "#ADD8E6",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 15,
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    forgotPassword: {
        color: "#4285F4",
        textAlign: "center",
        marginBottom: 20,
    },
    orText: {
        textAlign: "center",
        color: "#666",
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        marginHorizontal: 5,
    },
    socialButtonText: {
        marginLeft: 10,
        fontSize: 16,
        color: "#000",
    },
    signUpText: {
        textAlign: "center",
        color: "#666",
        marginBottom: 10,
    },
    signUpLink: {
        color: "#4285F4",
        fontWeight: "bold",
    },
    termsText: {
        fontSize: 12,
        color: "#666",
        textAlign: "center",
    },
    link: {
        color: "#4285F4",
    },
});
