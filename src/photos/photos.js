import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import axios from '../axios'
import './photos.css'

function Photos() {
    const [images, setImages]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get("/?client_id=kuNKOj83rk51RKOomonfSSCBRci5oSYNrXEKEPRHJYA",)
            setImages(request.data)
        }fetchData()
    },[])
    console.log(images)
    const image= images.map((images)=><img src={images.urls?.regular} alt={images?.alt_description} key={images?.id} />)
    return (
        <div className="photoDiv">
            <div className="photoGrid">
            {image}
        </div>
        </div>
    );
}

export default Photos;