import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import pins from '../assets/data/pins'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const PinScreen = () => {
    const [ratio, setRatio] = useState(1)

    const pin = pins[1]

    const insets = useSafeAreaInsets()

    const goBack = () => {

    }

    useEffect(() => {
        if (pin.image) {
            Image.getSize(pin.image, (width, height) => setRatio(width / height))
        }
        
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <StatusBar style='light' />
        <View style={styles.root}>
            <Image source={{ uri: pin.image }} style={[styles.image, {aspectRatio: ratio}]} />
                <Text style={styles.title}>{pin.title}</Text>
            </View>
            <Pressable onPress={goBack} style={[styles.backBtn, {top: insets.top + 20}]}>
                <Ionicons name='chevron-back' size={35} color="white" />

            </Pressable>
        </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    image: {
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    title: {
        margin: 10,
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 35
    },
    backBtn: {
        position: 'absolute',
        top: 70,
        left: 10
    }
})
export default PinScreen
