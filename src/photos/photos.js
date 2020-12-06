import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import axios from '../axios'
import './photos.css'

function Photos() {
    const [images, setImages]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get("/rando/?client_id=kuNKOj83rk51RKOomonfSSCBRci5oSYNrXEKEPRHJYA",{params:{_limit:10}})
            setImages(request.data)
        }fetchData()
    },)
    console.log(images)
    const image= images.url.map((images)=> <div src={images?.regular} alt="random image" />)
    return (
        <div className="photoDiv">
            <div className="photoGrid">
            
        </div>
        </div>
    );
}

export default Photos;