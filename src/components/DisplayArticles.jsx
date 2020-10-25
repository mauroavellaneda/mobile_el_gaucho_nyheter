import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Articles from "../modules/articles";
import ListArticles from "./ListArticles";

const DisplayArticles = (props, {navigation}) => {
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
      <Text style={styles.welcomeText}>
        {props.route.params.customParameter}
      </Text>
      <FlatList
        data={articles}
        keyExtractor={(article) => article.id.toString()}
        renderItem={({ item }) => {
          return <ListArticles article={item} navigation={navigation} />;
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
    color: "white",
  },
  welcomeText: {
    margin: 5,
    color: "#0059b3",
    fontSize: 20,
  },
});

export default DisplayArticles;
