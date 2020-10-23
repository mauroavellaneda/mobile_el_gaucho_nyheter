import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ArticlesList = (props) => {
    return (
        <View>
            <Text>{props.article.title}</Text>
        </View>
    )
}

export default ArticlesList

const styles = StyleSheet.create({})
