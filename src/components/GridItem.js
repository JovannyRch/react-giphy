import React from 'react'

export const GridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__fadeInDown animate__delay-2s"  >
            <img alt={title} src={url} />
            <p>{title}</p>
        </div>
    )
}
