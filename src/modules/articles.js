import axios from "axios";

const Articles = {
  async index() {
    let response;
    try {
      let result = await axios.get(`/articles`);
      response = result.data.articles;
      debugger
    } catch (error) {
      console.log(error);
    } finally {
      return response;
    }
  },
};

export default Articles;
