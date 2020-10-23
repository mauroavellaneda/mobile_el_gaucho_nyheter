import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListArticles = (props) => {
  return (
    <View>
      <Text>{props.article.title}</Text>
    </View>
  );
};

export default ListArticles;

const styles = StyleSheet.create({});
