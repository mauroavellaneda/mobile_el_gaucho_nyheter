import React, { useEffect, useState } from "react";
import Articles from "../modules/articles";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SingleArticle = ({ route, navigation }) => {
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
    <ScrollView>
      <View key={article.id} style={styles.singleArticle}>
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
        <Button
          color="#0059b3"
          title="Go Back"
          onPress={() => navigation.navigate("Latest news")}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default SingleArticle;

const styles = StyleSheet.create({
  singeArticle: {
    alignItems: "center",
    backgroundColor: "#1A263E",
  },

  title: {
    marginTop: 80,
    backgroundColor: "#1A263E",
    color: "white",
    fontSize: 26,
    padding: 10,
  },
  lead: {
    backgroundColor: "#1A263E",
    color: "white",
    fontSize: 18,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  content: {
    backgroundColor: "#1A263E",
    color: "white",
    padding: 10,
  },
  image: {
    height: 200,
    width: Dimensions.get("window").width,
  },
});
