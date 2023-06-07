import React, {useState, useEffect} from "react";
import { Typography,Card,CardContent, Button, CardHeader, CardActions } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Flickity from 'react-flickity-component'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import preguntas from "./Preguntas";

let arreglo = [
  { raza: "Pastor alemán", página: "1" },
  { raza: "Doberman", página: "1" },
  { raza: "Boyero de berna", página: "1" },
  { raza: "Rottweiler", página: "1" },
  { raza: "Akita", página: "1" },
  { raza: "San Bernardo", página: "1" },
  { raza: "Terranova", página: "1" },
  { raza: "Samoyedo", página: "1" },
  { raza: "Labrador retriever", página: "1" },
  { raza: "Golden retriever", página: "1" },
  { raza: "Border collie", página: "1" },
  { raza: "Pastor Collie", página: "1" },
  { raza: "Siberian Husky", página: "1" },
  { raza: "Bulldog Inglés", página: "1" },
  { raza: "Cocker Spaniel", página: "1" },
  { raza: "Bulldog francés", página: "1" },
  { raza: "Beagle", página: "1" },
  { raza: "Perro salchicha", página: "1" },
  { raza: "Schnauzer", página: "1" },
  { raza: "Yorkshire", página: "1" },
  { raza: "Pomerania", página: "1" },
  { raza: "Shih tzu", página: "1" },
  { raza: "Pug", página: "1" }
];
    
    let arregloJSON = arreglo.map(raza => {
        return { raza: raza, página: "1" };
      });
      
      console.log(arregloJSON);
const Pagina = () => {
const [index, setIndex] = useState(0);
const [mostrarPerros, setMostrarPerros] = useState(false);

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
        if (index === preguntas.length - 1) {
            console.log("termino");
            setMostrarPerros(true);
            return;
        }
        setIndex(index + 1);
        console.log(arreglo);
    };
    
    useEffect(() => {
      setPregunta(preguntas[index]);
    }, [index]);
      

    


return (
    <div>   
        <h1>Titulo</h1>
        <p>Descripción de lo que se hace </p>

        {mostrarPerros ? (
            <div>
                <Resultado />
            </div>
        ) : (
            <Card sx={{ minWidth: 275 }}>
                <CardHeader title={"Pregunta " + (index+1) + " de 6 "} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {pregunta.pregunta}
                        </Typography>
                        <br />
                        {pregunta.respuestas.map((respuesta) => (
                            <Button sx={{m:"20px"   }}
                                key={respuesta.id}
                                variant="contained"
                                onClick={() => seleccionar(respuesta.id)}
                            >
                                {respuesta.texto}
                            </Button>
                            
                        ))}

                </CardContent>
            </Card>
        )}
     
    </div>

)
}

const Resultado = () => {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
    };

    return (
        <div>
            <div>
                <h1>Perros que se acoplan a ti:</h1>
                
                <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={{
                        initialIndex: 1,
                        cellAlign: 'center',
                        wrapAround: true,
                        autoPlay: 2000,
                        pauseAutoPlayOnHover: true,
                        prevNextButtons: false,
                        pageDots: false,
                    }}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                >
                    {arreglo.map(({raza, pagina}) => (
                        <div key={raza}>
                          <Card sx={{ maxWidth: 500 }}>
                            <CardHeader title={raza} />
                            <CardContent>
                              <img src={"https://placedog.net/500/280?id=" + raza} alt={raza} />
                              <Typography variant="body2" color="text.secondary">
                                {pagina}
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Aprende más sobre esta raza</Button>
                            </CardActions>
                          </Card>
                        </div>
                    ))}
                </Flickity>
                            

            </div>
        </div>
    );
};




export default Pagina;