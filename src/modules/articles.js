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
};

export default Articles;
