import React, {useState, useEffect} from "react";
import { Typography,Card,CardContent, Button, CardHeader, CardActions, Toolbar } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Flickity from 'react-flickity-component'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import preguntas from "./Preguntas"; 

let arreglo = [
  { raza: "Pastor alemán", página: "9" },
  { raza: "Doberman", página: "10" },
  { raza: "Boyero de berna", página: "11" },
  { raza: "Rottweiler", página: "12" },
  { raza: "Akita", página: "13" },
  { raza: "San Bernardo", página: "14" },
  { raza: "Terranova", página: "15" },
  { raza: "Samoyedo", página: "16" },
  { raza: "Labrador retriever", página: "18" },
  { raza: "Golden retriever", página: "19" },
  { raza: "Border collie", página: "21" },
  { raza: "Pastor Collie", página: "20" },
  { raza: "Siberian Husky", página: "22" },
  { raza: "Bulldog Inglés", página: "23" },
  { raza: "Cocker Spaniel", página: "25" },
  { raza: "Bulldog francés", página: "24" },
  { raza: "Beagle", página: "27" },
  { raza: "Perro salchicha", página: "28" },
  { raza: "Schnauzer", página: "32" },
  { raza: "Yorkshire", página: "31" },
  { raza: "Pomerania", página: "29" },
  { raza: "Shih tzu", página: "30" },
  { raza: "Pug", página: "33" }
];
      
const Pagina = () => {
const [index, setIndex] = useState(0);
const [mostrarPerros, setMostrarPerros] = useState(false);

    const [pregunta, setPregunta] = useState(preguntas[index]);
        
    
    const seleccionar = (id) => {
        let pregunta = preguntas[index];
        let respuesta = pregunta.respuestas.find((respuesta) => respuesta.id === id);
        respuesta.elimina.forEach((raza) => {
          //obtiene en el arreglo el índice del objeto con raza: raza
            let indice = arreglo.findIndex((objeto) => objeto.raza === raza);

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
      

        const volverAEmpezar = () => {
            arreglo = [
                { raza: "Pastor alemán", página: "9" },
                { raza: "Doberman", página: "10" },
                { raza: "Boyero de berna", página: "11" },
                { raza: "Rottweiler", página: "12" },
                { raza: "Akita", página: "13" },
                { raza: "San Bernardo", página: "14" },
                { raza: "Terranova", página: "15" },
                { raza: "Samoyedo", página: "16" },
                { raza: "Labrador retriever", página: "18" },
                { raza: "Golden retriever", página: "19" },
                { raza: "Border collie", página: "21" },
                { raza: "Pastor Collie", página: "20" },
                { raza: "Siberian Husky", página: "22" },
                { raza: "Bulldog Inglés", página: "23" },
                { raza: "Cocker Spaniel", página: "25" },
                { raza: "Bulldog francés", página: "24" },
                { raza: "Beagle", página: "27" },
                { raza: "Perro salchicha", página: "28" },
                { raza: "Schnauzer", página: "32" },
                { raza: "Yorkshire", página: "31" },
                { raza: "Pomerania", página: "29" },
                { raza: "Shih tzu", página: "30" },
                { raza: "Pug", página: "33" }
            ];
        setMostrarPerros(false);
        setIndex(0);
    };


return (
    <div style={{backgroundColor:"white"}}>   
        <Toolbar
            sx={{
                display: "flex",
                backgroundColor: "#2fb648",
                color: "#000000",
                textAlign: "center",
            }}>
            <Typography variant="h5" component="div" color="white"> Encuentra a tu peludito ideal </Typography>
            </Toolbar>
          
        
  
        <p>Resuelve las siguientes preguntas para descubrir cual(es) son las razas de 
            perros que más se acomoden a tu estilo de vida </p>
        {mostrarPerros ? (
            <div>
                <Resultado />
                            <div>
                <Button variant="outlined" onClick={volverAEmpezar}>
                    Volver a empezar
                </Button>
            </div>
            </div>
        ) : (
            <Card sx={{ minWidth: 275, backgroundColor:"#E5FEEA" }}>
                <CardHeader title={"Pregunta " + (index+1) + " de 6 "} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {pregunta.pregunta}
                    </Typography>
                    <br />
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {pregunta.respuestas.map((respuesta) => (
                            <Button
                                key={respuesta.id}
                                variant="outlined"
                                sx={{
                                    m: "10px",
                                    color: "#45CF5E",
                                    borderColor: "#45CF5E",
                                    width: "100%",
                                    maxWidth: "300px",
                                    flexGrow: 1,
                                }}
                                onClick={() => seleccionar(respuesta.id)}
                            >
                                {respuesta.texto}
                            </Button>
                        ))}
                    </div>
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
            <br/>
            <div>
                <Typography variant="h5">Perros que se acoplan a ti:</Typography>
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
                    sx={{ width: "100%", height: "100%" }}
                >
                    {arreglo.map(({raza, página}) => (
                        <div key={raza} style={{ height: "500px", width:"400px"}}>
                          <Card sx={{ width: "100%", height: "100%" }}>
                            <CardHeader title={raza} />
                            <CardContent>
                              <img src={require("../assets/img/" + raza + ".jpg")} alt={raza} style={{ width: "", height: "auto" }} />
                              <Typography variant="body2" color="text.secondary">
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Aprende más sobre esta raza en la página {página}</Button>
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