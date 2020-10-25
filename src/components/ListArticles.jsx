import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";

const ListArticles = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title} id={`article-title-${props.article.id}`}>
        {props.article.title}
      </Text>
      <Text style={styles.lead} id={`article-lead-${props.article.id}`}>
        {props.article.lead}
      </Text>

      <Image
        source={{ uri: props.article.image }}
        style={styles.image}
        testID={`article-image-${props.article.id}`}
      />
    </View>
  );
};

export default ListArticles;

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: Dimensions.get("window").width,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 8,
    marginBottom: 40,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  title: {
    color: "white",
    fontSize: 26,
    paddingBottom: 10,
  },
  lead: {
    color: "white",
  },
  image: {
    height: 100,
    width: Dimensions.get("window").width,
    marginTop: 40,
  },
});
