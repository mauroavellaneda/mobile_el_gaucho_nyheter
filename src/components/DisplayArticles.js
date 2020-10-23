import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
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

      <Text>hello</Text>
    </View>
  );
};

export default DisplayArticles;

const styles = StyleSheet.create({ container: { backgroundColor: "blue" } });
