import React from 'react'
import * as Three from 'three'
    const Sphere=new Three.SphereGeometry(4)
    const basicmatetrial=new Three.MeshStandardMaterial({color:'blue',wireframe:false})
    const SphereGeom= new Three.Mesh(Sphere,basicmatetrial)
    SphereGeom.position.set(-10,10,0)

    // console.log(SphereGeom)

    // SphereGeom.rotateX(-0.5*Math.PI)

export default SphereGeom