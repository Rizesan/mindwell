import {instance} from "../api/base.api";

export const endpoint= "character";

export const characters =  {
  getAll: function ({page}:{page: number }){
      return instance.get(endpoint,{
          params:{
              page
          }
      })
  }
}

