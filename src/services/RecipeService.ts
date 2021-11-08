import http from "../http-common";

class RecipeDataService {
  
  getAll() {
    return http.get("/filter.php?a=Indian");
  }

  search(text: string) { 
    return http.get(`/search.php?s=${text}`)
  }


  getRecipeDetails(id: string) { 
    return http.get(`/lookup.php?i=${id}`);
  }
}

export default new RecipeDataService();
