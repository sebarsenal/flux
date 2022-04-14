import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"

function Perfil () {
    //const params = useParams();
    const {posicion} = useParams();

    let personas =[{
        marca:"Nike",
        img:"https://i.ytimg.com/vi/NHV__wEoDz4/maxresdefault.jpg",
        modelo:"Ekiden",
        uso: "competencia"
    },
    
    {
        marca:"Nike",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScF0uqwGAK7DzyoE8zpbo4KWXQALytr39g7w&usqp=CAU",
        modelo:"Alphafly",
        uso: "competencia"
    }
]

    useEffect(()=>{
        alert(posicion)
        //alert(params.posicion)

    },[])
   
    return(
        <div>
            <h1>Este es mi perfil, bienvenidos</h1>
            <h3>Esta es la marca {personas[posicion]?.marca}</h3>
            <h3>Esta es la foto</h3 ><img src={personas[posicion]?.img} width="200"/>
            <h3>Este es el modelo {personas[posicion]?.modelo}</h3>
            <h3>Este es el uso {personas[posicion]?.uso}</h3>
        </div>
    );
}

export default Perfil;