"use client"
import * as Three from 'three'
import React, { Suspense, useEffect, useRef } from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import Box from './3dobjects/Box'
import PlaneGeometry from './3dobjects/Plane'
import SphereGeometry from './3dobjects/Sphere'
import {options,DAT} from './3dobjects/datgui'

const page = () => {
   if(typeof window=="undefined"){return}
  const canvasobj=useRef()

  const Renderer=new Three.WebGLRenderer()
  Renderer.setSize(window.innerWidth,window.innerHeight)
  const Scene=new Three.Scene()
  const Camera=new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,
    0.1,
    1000
  )
  
  const orbit=new OrbitControls(Camera,Renderer.domElement)
  orbit.update()
  const AxisHelper=new Three.AxesHelper(2)
  Camera.position.set(0,2,5)
  Scene.add(AxisHelper)
  Scene.add(Box)
  Scene.add(SphereGeometry)
  Scene.add(PlaneGeometry)
  const AmbientLight=new Three.AmbientLight(0x333333)
  const DirectionalLight=new Three.DirectionalLight(0xfffff,0.8)
  DirectionalLight.position.set(-30,50,0)
  Scene.add(DirectionalLight)
  Scene.add(AmbientLight)
  Renderer.setClearColor('orange')
  const mouseposition=new Three.Vector2()
  window.addEventListener('mousemove',(e)=>{
    mouseposition.x=(e.clientX/window.innerWidth) * 2 - 1
    mouseposition.y= -(e.clientY/window.innerHeight)  * 2 + 1
  })
  const Sphereid=SphereGeometry.id
  const Raycaster=new Three.Raycaster()
 
  useEffect(() => {
     let Step=0
    function animate() {
      Box.rotation.x +=0.01
      Box.rotation.y +=0.01
      Step+=options.speed
      SphereGeometry.position.y =10*Math.abs(Math.sin(Step))
      Raycaster.setFromCamera(mouseposition,Camera)

      const intersects=Raycaster.intersectObjects(Scene.children) 
      // console.log(intersects)
      intersects.map((x)=>{
        if(x.object.id==Sphereid){
          SphereGeometry.material.color.set('red')
        }
      })
      Renderer.render(Scene,Camera)
    }
    
    Renderer.setAnimationLoop(animate)
 
  canvasobj.current.appendChild(Renderer.domElement)  
  DAT()  
    return () => {}
  }, [])
  
  // document.getElementById('check').appendChild(Renderer.domElement)

  return (
    <Suspense>
      <div id='check' ref={canvasobj}></div>
    </Suspense>
  )
}

export default page