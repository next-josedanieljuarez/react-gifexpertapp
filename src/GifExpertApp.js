import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samura X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     let arreglo = [...categories,'HunterXHunter'];
    //     setCategories(arreglo);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={category}    
                            category={category} 
                        />
                    )
                }
            </ol>

        </>
    );
}

export default GifExpertApp;