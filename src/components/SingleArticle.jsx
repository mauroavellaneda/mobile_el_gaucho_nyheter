import React, { useEffect, useState } from "react";
import Articles from "../modules/articles";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const SingleArticle = ({ route }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(route.params.articleId);
      if (response.id) {
        setArticle(response);
      } else {
        setMessage(response);
      }
    };
    getSingleArticle();
  }, [route]);
  return (
    <View key={article.id}>
      <Text style={styles.title} id={`article-title-${article.id}`}>
        {article.title}
      </Text>
      <Text style={styles.lead} id={`article-lead-${article.id}`}>
        {article.lead}
      </Text>

      <Image
        source={{ uri: article.image }}
        style={styles.image}
        testID={`article-image-${article.id}`}
      />
      <Text style={styles.content} id={`article-content-${article.id}`}>
        {article.content}
      </Text>
    </View>
  );
};

export default SingleArticle;

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
  content: {
    color: "white",
  },
  image: {
    height: 100,
    width: Dimensions.get("window").width,
    marginTop: 40,
  },
});
