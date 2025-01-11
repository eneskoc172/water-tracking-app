import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({navigation}) => {
    const [showSplash, setShowSplash] = useState(true);
    const [section, setSection] = useState(0)
    // Splash Screen'in 3 saniye sonra kaybolması
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000); // 3 saniye
        return () => clearTimeout(timer);
    }, []);

    // Eğer splash ekran aktifse, sadece splash ekranını göster
    if (showSplash) {
        return (
            <View style={styles.splashContainer}>
                <Image
                    source={require('../assets/splashIcon.png')} // Splash logo kaynağını ekleyin
                    style={styles.splashImage}
                />
                <Text style={styles.splashText}>Su Takip</Text>
                <Text style={styles.splashSubText}>
                    Susuz kalmayın ve günlük su alımınızı takip edin
                </Text>
            </View>
        );
    }

    // Splash ekranından sonra onboarding ekranları
    return (
        <View style={{ flex: 1 }}>
            {
                section == 0 &&
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/section1.png')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Track your daily water intake with us.</Text>
                    <Text style={styles.subtitle}>
                        Achieve your hydration goals with a simple tap!
                    </Text>
                    <TouchableOpacity
                        onPress={() => setSection(1)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            }



            {
                section == 1 &&
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/section2.png')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Smart Reminders Tailored to You</Text>
                    <Text style={styles.subtitle}>
                        Quick and easy to set your hydration goal.
                    </Text>
                    <TouchableOpacity
                        onPress={() => setSection(2)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            }


            {
                section == 2 &&
                <View style={styles.slide}>
                    <Image
                        source={require('../assets/section3.png')}
                        style={styles.image}
                    />
                    <Text style={styles.title}>Easy to Use – Drink, Tap, Repeat</Text>
                    <Text style={styles.subtitle}>
                        Staying hydrated every day is easy with Drops Water Tracker.
                    </Text>
                    <TouchableOpacity
                       onPress={() => navigation.replace("Login")}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ADD8E6",
    },
    splashImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    splashText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    splashSubText: {
        fontSize: 16,
        color: "#fff",
        marginTop: 10,
        textAlign: "center",
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "#ADD8E6",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    dot: {
        backgroundColor: "#ADD8E6",
    },
});
