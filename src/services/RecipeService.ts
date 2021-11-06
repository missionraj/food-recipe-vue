import http from "../http-common";

class RecipeDataService {
  getAll() {
    return http.get("/filter.php?a=Indian");
  }

}

export default new RecipeDataService();
