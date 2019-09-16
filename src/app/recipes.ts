export interface IRecipes {
    name?: string;
    description?: string;
    step : {description?:string}[];
    image?: string;
    ingredient?: {
        amount?:string, 
        unit?:string,
        name?:string,
        preparation?:string
    }[];
    ingredientGroup?:{
        name?:string,
        ingredient?:{
            amount?:string, 
            unit?:string,
            name?:string,
            preparation?:string 
        }[]
    }[];
    tag:any;
    notes:any;
    id:string;

}
