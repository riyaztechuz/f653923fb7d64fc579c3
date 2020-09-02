import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Screen2(props) {
    return (
            <ScrollView>
                <Text style={styles.content}>{JSON.stringify(props.route.params.hit)}</Text>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 20,
        fontSize: 15
    }
})