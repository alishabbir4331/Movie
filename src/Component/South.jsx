import React from 'react'
import { NavLink } from 'react-router-dom'
export const South = () => {
  const data = [
{
 Title:"Bheeshma",
 image:"./images/bhesma.jpg",
},
{
  Title:"Lover ",
  image:"./images/Bravo-2.jpg",
 },
 {
  Title:"Chalo",
  image:"./images/chalo.jpg",
 },
 {
  Title:"Dear Commrad",
  image:"./images/dear-com.jpg",
 },
 {
  Title:"Hebbuli",
  image:"./images/hebbuli.jpg",
 }, 
 {
  Title:"Pushpa",
  image:"./images/pushpa.jpg",
 },
 {
   Title:"Sita Ram",
   image:"./images/sita-ram.jpg",
  },
  {
   Title:"Vardi Ka Dum",
   image:"./images/vardi.jpg",
  },
  {
   Title:"Robot 2.0",
   image:"./images/20.jpg",
  },
  {
   Title:"Baahubali",
   image:"./images/baahubali.jpg",
  }, 
  {
    Title:"KGF Chapter 2",
    image:"./images/kgf.jpg",
   },
   {
    Title:"RRR",
    image:"./images/rrr.jpg",
   }, 
  
 
  ];
    
  return (
    <>
    <div className='container mt-5 d-flex flex-wrap justify-content-between'>
    {data.map((value, index) => {
        return(
            <>
            
           <div className="card card-main mt-3" key={index} style={{width:"18rem"}}>
  <img src={value.image} className=" card-image-top "  alt="..."/>
  <div className="card-body justify-content-center">
    <h5 className="card-title">{value.Title}</h5>
    <div className='justify-content-center card-butn d-flex'>
    <NavLink to="#" className="btn card-btn mx-auto ">Watch Online</NavLink>
    </div>
  </div>
</div>
            </>
        )
    })}
</div>

    </>
  )
}
export default South