import React from 'react'
import * as Three from 'three'
    const boxgeometry=new Three.BoxGeometry()
    const basicmatetrial=new Three.MeshBasicMaterial({color:'orange'})
    const Box=new Three.Mesh(boxgeometry,basicmatetrial)


export default Box