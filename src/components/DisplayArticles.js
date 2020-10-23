import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Articles from "../modules/articles";
import ArticlesList from "./ArticlesList";

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
    <View>
      {/* {articles} */}
      <FlatList
        data={articles}
        keyExtractor={(article) => article.id.toString()}
        renderItem={({ item }) => {
          return <ArticlesList article={item}/>;
        }}
      />
      <Text>helooo</Text>
    </View>

    // <View>
    //   {articles.map((article) => {
    //     return (
    //       <View key={article.id}>
    //         <Text>{article.title}</Text>
    //         <Text>{article.lead}</Text>
    //       </View>
    //     );
    //   })}
    // </View>
  );
};

export default DisplayArticles;

const styles = StyleSheet.create({});
