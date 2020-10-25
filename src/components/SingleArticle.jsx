import React, { useEffect, useState } from "react";
import Articles from "../modules/articles";
import { StyleSheet, Text, View } from "react-native";

const SingleArticle = ({route}) => {
  const [article, setArticle] = useState({});
  const { articleId } = route.params

  useEffect(() => {
    const getSingleArticle = async () => {
      const response = await Articles.show(id);
      if (response.id) {
        debugger;
        setArticle(response);
      } else {
        debugger;
        setMessage(response);
      }
    };
    getSingleArticle();
  }, [id]);
  debugger;
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default SingleArticle;

const styles = StyleSheet.create({});
