import React from 'react'
import { NavLink } from 'react-router-dom'
export const Pakistani = () => {
  const data = [
{
 Title:"Bin Roye",
 image:"./images/image/bin-roye.jpg",
},
{
  Title:"Jawani Phir Nai Ani 2",
  image:"./images/image/jawani.jpg",
 },
 {
  Title:"Jawani Phir Nai Ani ",
  image:"./images/image/jawaniphir.jpg",
 },
 {
  Title:"Parwaz Hai Junoon",
  image:"./images/image/parwaz.jpg",
 },
 {
  Title:"Punjab Nahi Jao Gi",
  image:"./images/image/Punjab_Nai.jpg",
 }, 
 {
  Title:"Shair Dil",
  image:"./images/image/Shair-dil.jpg",
 },
 {
   Title:"Teefa In Trouble",
   image:"./images/image/teefa.jpg",
  },
  {
   Title:"Waar",
   image:"./images/image/waar.jpg",
  },
  {
   Title:"Yalghar",
   image:"./images/image/yalghaar.jpg",
  },
  {
   Title:"Wrong No",
   image:"./images/image/wrong.jpg",
  }, 
  {
    Title:"Zindgi Kitni Haseen Hai",
    image:"./images/image/Zindgi.jpg",
   },
   {
    Title:"Ruposh",
    image:"./images/image/rouposh.jpg",
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
export default Pakistani