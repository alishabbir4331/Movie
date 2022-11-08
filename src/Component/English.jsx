import React from 'react'
import { NavLink } from 'react-router-dom';
export const English = () => {
  const data = [
{
 Title:"X-Men Dark Pheniox",
 image:"./images/X-Men.jpg",
 movie:"https://www.youtube.com/embed/kmnPKipK17M"

},
{
  Title:"Black Adam",
  image:"./images/Black-Adam.jpg",
 movie:"https://youtu.be/UJ4SUZSo8H8",

 },
 {
  Title:"Venom",
  image:"./images/Venom.jpg",
 movie:"https://youtu.be/UJ4SUZSo8H8",

 },
 {
  Title:"Spider Man",
  image:"./images/Spider-Man.jpg",
 movie:"https://youtu.be/UJ4SUZSo8H8",

 },
 {
  Title:"Thor The Dark World",
  image:"./images/Thor-dark-world-poster.jpg",
 movie:"https://youtu.be/UJ4SUZSo8H8",

 }, 
 {
  Title:"Man of Steel",
  image:"./images/Man-of-Steel.jpg",
 movie:"https://youtu.be/UJ4SUZSo8H8",

 },
 {
   Title:"Jhony English",
   image:"./images/johnny-english-movie.jpg",
 movie:"https://youtu.be/UJ4SUZSo8H8",

  },
  {
   Title:"Fast And Furious",
   image:"./images/fast&furious.jpg",
  },
  {
   Title:"Captin Marval",
   image:"./images/Captin-Marval.jpg",
  },
  {
   Title:"Black Panther",
   image:"./images/Black-Panther.jpg",
  }, 
  {
    Title:"Batman",
    image:"./images/Batman.jpg",
   },
   {
    Title:"She Hulk",
    image:"./images/She-Hulk.jpg",
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
   <a herf={value.movie} target="_blank"  rel="noreferrer" className="btn card-btn mx-auto">watch online</a>

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
