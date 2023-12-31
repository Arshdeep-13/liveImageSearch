import React from 'react'

const ImageComponent = (props) => {
    let data = `https://source.unsplash.com/400x300/?${props.name}`;
    return(
        <img src={data} alt="Search image" />
    );
}

export default ImageComponent