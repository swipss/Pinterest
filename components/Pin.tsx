import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {AntDesign } from '@expo/vector-icons'

const Pin = (props) => {
    const [ratio, setRatio] = useState(1)


    const { image, title } = props.pin

    const onLike = () => {

    }
    
    useEffect(() => {
        if (image) {
            Image.getSize(image, (width, height) => setRatio(width / height))
        }
        
    }, [])
    return (
        <View style={styles.pin}>
            <View>
                <Image source={{ uri: image }} style={[styles.image, {aspectRatio: ratio}]} />
                <Pressable onPress={onLike} style={styles.heartButton}>

                <AntDesign name="hearto" size={16} />
                </Pressable>
            </View>
            
            <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
  )
}

export default Pin

const styles = StyleSheet.create({
    pin: {
        width: '100%',
        padding: 4
      },
      title: {
        fontSize: 20,
          fontWeight: 'bold',
        lineHeight: 22,
          margin: 5,
        color: '#181818'
      },
      image: {
        width: '100%',
        borderRadius: 25,
        
    },
    heartButton: {
        backgroundColor: '#d3cfd4',
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 5,
        borderRadius: 50,
        

    }
})