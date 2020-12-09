import React from 'react';

function Gallery() {
    
              const [images, setImages]=useState([])
    
    // function t(pageNumber){
    //     var pageNumber;
    //     pageNumber=pageNumber+1;
    //     return pageNumber
    // }
    // cosnt v=setInterval(t,3000)
    
 
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(`?page=1/client_id=kuNKOj83rk51RKOomonfSSCBRci5oSYNrXEKEPRHJYA`)
            setImages(request.data)
        }fetchData()
    },[])
     
    // console.log(t(1))
    console.log(images)
    const image= images.map((images)=><img src={images.urls?.regular} alt={images?.alt_description} key={images?.id} />)
    return (
        <div className="photoDiv">
            <div className="photoGrid">
            {image}
        </div>
        </div>
    )
}

export default Gallery;