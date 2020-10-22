import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Articles } from '../modules/articles';

const DisplayArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticlesIndex = async () => {
      setArticles(await Articles.index());
    };
    getArticlesIndex();
  }, []);

  return (
    <View>
      {articles.map((article) => {
        return (
          <>
            <Text>{article.title}</Text>
            <Text>{article.lead}</Text>
          </>
        );
      })}
    </View>
  );
};

export default DisplayArticles;

const styles = StyleSheet.create({});
