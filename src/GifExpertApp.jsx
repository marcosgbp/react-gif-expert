import { useState } from "react"
import {AddCategories, GifGrid, BtnClear} from "./components";

export default function GifExpertApp() {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);

    }

    const onClearSearch = ()=> {
        setCategories([]);
    }

    return (
        <div>

            <h1>GifExpertApp</h1>

            <div>
                <BtnClear onClearSearch={onClearSearch} />
            </div>
            


            <AddCategories
                onNewCategory={onAddCategory}
            />


            {
                //Validamos que categories tenga algo
                categories.length===0
                ? <p>Busca algo que te guste</p>

                :categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }


        </div>
    )
}
