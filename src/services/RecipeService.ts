import http from "../http-common";

class RecipeDataService {
  getAll() {
    return http.get("/categories.php");
  }

}

export default new RecipeDataService();
