import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carsoul from './Carsoul'

import { English } from './English'
import { Hindi } from './Hindi'
import Pakistani from './Pakistani'
import Punjabi from './Punjabi'
import { South} from './South'


const App = () => {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Carsoul/>}></Route>
    <Route path="/english" element={<English/>}/>
    <Route path="/hindi" element={<Hindi/>}/>  
    <Route path="/south" element={<South/>}/>
    <Route path="/punjabi" element={<Punjabi/>}/> 
    <Route path="/pakistani" element={<Pakistani/>}/> 
 
    

   </Routes>
   </>
  )
}

export default App