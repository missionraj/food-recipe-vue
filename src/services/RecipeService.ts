import http from "../http-common";

class RecipeDataService {
  
  getAll() {
    return http.get("/filter.php?a=Indian");
  }

  search(text: string) { 
    return http.get(`/search.php?s=${text}`)
  }

}

export default new RecipeDataService();
