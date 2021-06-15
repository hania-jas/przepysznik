export interface RecipieProps {
    recipie: {
    id: number;
    title: string;
    label: string;
    src: string;
    ingredients: string[];
    method: string[];
    },
    deleteRecipie: (id: number) => void; 
}