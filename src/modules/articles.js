import axios from "axios";

const Articles = {
  async index() {
    let result = await axios.get("/articles");
    return result.data.articles;
  },
};

export {Articles};
