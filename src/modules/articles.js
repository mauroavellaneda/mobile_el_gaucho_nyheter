import axios from "axios";

const Articles = {
  async index() {
    let response;
    try {
      let result = await axios.get(`/articles`);
      return (response = result.data.articles);
    } catch (error) {
      console.log(error);
    }
  },
  async show(articleId) {
    try {
      const result = await axios.get(`/articles/${articleId}`);
      return result.data.article;
    } catch (error) {
      console.log(error);
    }
  },
};

export default Articles;
