import React from 'react'
import { NavLink } from 'react-router-dom'
export const Hindi = () => {
  const data = [
{
 Title:"Radhe Shyam",
 image:"./images/Radhe-Shyam.jpg",
},
{
  Title:"Raees",
  image:"./images/Raees.jpg",
 },
 {
  Title:"Ek Villan",
  image:"./images/Ek-Villian.jpg",
 },
 {
  Title:"Laxhmmi Bomb",
  image:"./images/Laxmmi-Bomb.jpg",
 },
 {
  Title:"Dilwale",
  image:"./images/Dilwale.jpg",
 }, 
 {
  Title:"Bhool Bhulaiya 2",
  image:"./images/Bhool-Bhulaiyaa-2.jpg",
 },
 {
   Title:"Aashiqui 2",
   image:"./images/ashiqui-2.jpg",
  },
  {
   Title:"Hate Story 4",
   image:"./images/hate-story-4.jpg",
  },
  {
   Title:"Kaho na Pyar Hai",
   image:"./images/kaho.jpg",
  },
  {
   Title:"Main Hon Naw",
   image:"./images/main-ho.jpg",
  }, 
  {
    Title:"OM",
    image:"./images/om.jpg",
   },
   {
    Title:"Raaz Rebot",
    image:"./images/raaz-reboot.jpg",
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
export default Hindi