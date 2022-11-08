import React from 'react'
import { NavLink } from 'react-router-dom'
export const Punjabi = () => {
  const data = [
{
 Title:"Puaada",
 image:"./images/Puaada.jpg",
},
{
  Title:"Blackia",
  image:"./images/image/Blackia.jpg",
 },
 {
  Title:"Channa Mereya",
  image:"./images/image/Channa_Mereya.jpg",
 },
 {
  Title:"Galwakdi",
  image:"./images/image/Galwakdi.jpg",
 },
 {
  Title:"Jutt James Bond",
  image:"./images/image/jatt-james.jpg",
 }, 
 {
  Title:"Lekh",
  image:"./images/image/lekh.jpg",
 },
 {
   Title:"Main Te Bapu",
   image:"./images/image/main-te.jpg",
  },
  {
   Title:"Saunkan Saunkane",
   image:"./images/image/Saunkan.jpg",
  },
  {
   Title:"Shreak 2",
   image:"./images/image/shreak2.jpg",
  },
  {
   Title:"Warning",
   image:"./images/image/warning.jpg",
  }, 
  {
    Title:"Chal Mera put 3",
    image:"./images/image/chal-mera.jpg",
   },
   {
    Title:"Jind-e- Meriye",
    image:"./images/image/Jind.jpg",
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
export default Punjabi