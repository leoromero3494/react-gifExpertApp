import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
      const [categories, setCategories] = useState(['One Punch']);
console.log(categories);
    //   const handleAdd = () => {
    //      // setCategories( [ 'HunterXHunter', ...categories ] );
    //      setCategories( cats => [ ...cats, 'HunterXHunter' ] );
    //   }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>    
            <hr/>

          

            <ol>
                {
                    categories.map( (category, i) =>
                        <GifGrid
                            key={ category }
                            category={ category }
                        ></GifGrid>
                     
               )}
            </ol>
        </div>
    )
}



