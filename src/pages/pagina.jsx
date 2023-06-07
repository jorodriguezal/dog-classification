
import React, {useState, useEffect} from "react";
import { Typography,Card,CardContent, Button, CardHeader, Toolbar } from "@mui/material";
import preguntas from "./Preguntas";

let arreglo =[
    "Pastor alemán","Doberman","Boyero de berna", "Rottweiler","Akita","San Bernardo","Terranova","Samoyedo",
    "Labrador retriever", "Golden retriever", "Border collie","Pastor Collie","Siberian Husky","Bulldog Inglés","Cocker Spaniel",
    "Bulldog francés","Beagle","Perro salchicha","Schnauzer","Yorkshire","Pomerania","Shih tzu", "Pug" ];
    
    let arregloJSON = arreglo.map(raza => {
        return { raza: raza, página: "1" };
      });
      
      console.log(arregloJSON);
const Pagina = () => {
const [index, setIndex] = useState(0);


    const [pregunta, setPregunta] = useState(preguntas[index]);
        
    
    const seleccionar = (id) => {
        let pregunta = preguntas[index];
        let respuesta = pregunta.respuestas.find((respuesta) => respuesta.id === id);
        respuesta.elimina.forEach((raza) => {
          let indice = arreglo.indexOf(raza);
          //si indice =-1 no existe el elemento no hace nada
            if (indice !== -1){
                arreglo.splice(indice, 1);
            }
          

        });
        setIndex(index + 1);
        console.log(arreglo);
      };
    
      useEffect(() => {
        
        setPregunta(preguntas[index]);
      }, [index]);
      

    


return (
    <div style={{backgroundColor:"white"}}>   
        <Toolbar
            sx={{
                display: "flex",
                backgroundColor: "#45CF5E",
                color: "#000000",
                textAlign: "center",
            }}>
            <Typography variant="h4" component="div"> No tiene nombre </Typography>
            </Toolbar>
          
        
  
        <p>Descripción de lo que se hace </p>

        <Card sx={{ minWidth: 275, backgroundColor:"#E5FEEA" }}>
            <CardHeader title={"Pregunta " + (index+1) + " de 6 "} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {pregunta.pregunta}
                    </Typography>
                    <br />
                    {pregunta.respuestas.map((respuesta) => (
                        <Button  variant="outlined"  sx={{m:"20px"  ,color:"#45CF5E" ,borderColor:"#45CF5E"}}
                            key={respuesta.id}
                            onClick={() => seleccionar(respuesta.id)}
                        >
                            {respuesta.texto}
                        </Button>
                        
                    ))}

            </CardContent>
        </Card>
     
    </div>

)
}
export default Pagina;