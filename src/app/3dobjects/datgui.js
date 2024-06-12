'use client'
import SphereGeom from './Sphere'
const options={
    spherecolor:'#ffea00',
    wireframe:false,
    speed:0.01
} 
async function DAT() {

    if (typeof window !=="undefined") {
      const  DAT =await import('dat.gui') 

        const GUI=new DAT.GUI()
        
        GUI.add(options,'wireframe').onChange(function(e) {
            SphereGeom.material.wireframe=e
        })
        GUI.addColor(options,'spherecolor').onChange(function(e) {
            SphereGeom.material.color.set(e)
        })    
        GUI.add(options,'speed',0,0.1)
    }
        
}   



export  {DAT,options}