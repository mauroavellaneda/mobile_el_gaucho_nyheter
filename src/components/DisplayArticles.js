import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Articles from "../modules/articles";
import ListArticles from "./ListArticles";

const DisplayArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticlesIndex = async () => {
      const response = await Articles.index();
      setArticles(response);
    };
    getArticlesIndex();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(article) => article.id.toString()}
        renderItem={({ item }) => {
          return <ListArticles article={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A263E",
    alignItems: "center",
    marginTop: "20%",
  },
});

export default DisplayArticles;
