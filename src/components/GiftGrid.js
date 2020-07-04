import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from './GridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GiftGrid = ({ category }) => {


    const { data: imgs, loading } = useFetchGifs(category);
    return (
        <>
            <h1>{category}</h1>
            {
                loading && <p>Cargando...</p>
            }
            <div className="card-grid">

                {

                    imgs.map((img) => {
                        return <GridItem key={img.id} {...img} />
                    })
                }
            </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
