import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Screen1 = (props) => {

    const [hits, setHits] = useState([])
    const [pageNo, setPageNo] = useState(0);

    const getHits = () => {
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNo}`)
            .then((response) => response.json())
            .then(res => {
                setHits([...hits, ...res.hits])
            })
    }

    useEffect(() => {
        const apiIntr = setInterval(() => {
            setPageNo(pageNo + 1)
        }, 10000)

        return () => {
            clearInterval(apiIntr)
        }
    })


    useEffect(() => {
        getHits()
    }, [pageNo])

    return (
        <View>
            <FlatList
                keyExtractor={(data, index) => data.created_at + ' ' + index}
                data={hits}
                renderItem={({ index, item }) =>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.itemContainer}
                        onPress={() => { props.navigation.navigate('Screen2', { hit: item }) }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.url}</Text>
                        <Text>{item.created_at}</Text>
                    </TouchableOpacity>
                }
                onEndReached={() => { setPageNo(pageNo + 1) }}
            />
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    content: {
        marginBottom: 5,
        fontSize: 15
    },
    itemContainer: {
        padding: 20,
        backgroundColor: 'grey',
        marginBottom: 10
    }
})