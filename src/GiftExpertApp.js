import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


const App = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const addCategory = (c) => {
        setCategories([c, ...categories]);
    }

    return <>
        <h1>Gift Expert App</h1>
        <hr />
        <AddCategory addCategory={addCategory} />
        <ol>
            {
                categories.map((c, index) => <GiftGrid category={c} key={index} />)
            }
        </ol>
    </>
};

export default App;