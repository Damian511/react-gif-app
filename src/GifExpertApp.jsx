import { useState } from "react";
import { AddCategory,GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories( categories => [...categories,'Valorant']);
    };

    return (
        <>
            {/* titulo de la aplicacion */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {/* Listadp de gifs */}
            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
            {/* Gif Item */}
        </>
    )
}
