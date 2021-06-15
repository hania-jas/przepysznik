import { RecipieTypes } from "./recipieTypes";

export interface RecipiesListProps {
    recipiesList: RecipieTypes[];
    deleteRecipie: (id: number) => void; 
  }