import React from 'react'
import * as Three from 'three'
    const Plane=new Three.PlaneGeometry(30,30)
    const basicmatetrial=new Three.MeshBasicMaterial({color:'white',side:Three.DoubleSide})
    const PlaneGeometry=new Three.Mesh(Plane,basicmatetrial)
    PlaneGeometry.rotateX(-0.5*Math.PI)

export default PlaneGeometry