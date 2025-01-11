import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons, AntDesign } from "@expo/vector-icons";

const RegisterScreen = () => {
    const [currentScreen, setCurrentScreen] = useState("createAccount"); // Ekran durumu
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            {currentScreen === "createAccount" ? (
                <View style={styles.formContainer}>

                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>Create an account</Text>
                        <Text style={styles.subtitle}>Securely login to your account</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome name="user" size={20} color="#B0B0B0" style={styles.icon} />
                            <TextInput
                                style={styles.input} placeholder="Full Name" />
                        </View>
                        <View style={styles.inputContainer}>
                            <AntDesign name="mail" size={20} color="#B0B0B0" style={styles.icon} />
                            <TextInput style={styles.input} placeholder="Email address" />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesome name="phone" size={20} color="#B0B0B0" style={styles.icon} />
                            <TextInput style={styles.input} placeholder="+234 Enter number" />
                        </View>
                        <View style={styles.inputContainer}>
                            <MaterialIcons name="password" size={20} color="#B0B0B0" style={styles.icon} />
                            <TextInput
                                secureTextEntry={!passwordVisible}
                                style={styles.input}
                                placeholder="Password"
                            />
                            <TouchableOpacity
                                onPress={() => setPasswordVisible(!passwordVisible)}
                                style={styles.icon}
                            >
                                <FontAwesome
                                    name={passwordVisible ? "eye-slash" : "eye"}
                                    size={20}
                                    color="#B0B0B0"
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setCurrentScreen("verificationCode")}
                        >
                            <Text style={styles.buttonText}>Create Account</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>I Already Have an Account Log in</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.formContainer}>
                    <TouchableOpacity
                        onPress={() => setCurrentScreen("createAccount")}
                        style={styles.backButton}
                    >
                        <Text style={styles.backButtonText}>{"<"}</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>Verification Code</Text>
                        <Text style={styles.subtitle}>
                            We sent you a 4 digit code to your email address. Please check & enter your code
                        </Text>
                        <View style={styles.codeInputContainer}>
                            {[...Array(4)].map((_, index) => (
                                <TextInput key={index} style={styles.codeInput} keyboardType="numeric" maxLength={1} />
                            ))}
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>
                            Didn’t Receive the Code? <Text style={styles.resendText}>Resend</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        flex: 1,
        width: "90%",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: "gray",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#62CDFA",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    linkText: {
        color: "gray",
        marginTop: 10,
    },
    resendText: {
        color: "#62CDFA",
        fontWeight: "bold",
    },
    backButton: {
        alignSelf: "flex-start",
        marginBottom: 10,
        backgroundColor: "#62CDFA",
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonText: {
        fontSize: 20,
        color: "#FFF",
    },
    codeInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        marginVertical: 4
    },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        textAlign: "center",
        fontSize: 18,
        backgroundColor: "#f9f9f9",
        marginHorizontal: 8
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
});
