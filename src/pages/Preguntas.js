const preguntas = [
    {
        pregunta: "¿De cuántos metros cuadrados es tu vivienda?",
        respuestas: [
            { id: "1", texto: "menos de 45 m2", elimina: [
                "Pastor alemán",
                "Doberman",
                "Boyero de berna",
                "Rottweiler",
                "Akita",
                "San Bernardo",
                "Terranova",
                "Samoyedo",
                "Labrador retriever",
                "Golden retriever",
                "Border collie",
                "Pastor Collie",
                "Siberian Husky"
              ]
               },
            { id: "2", texto: "entre 46 y 70 m2",elimina: [] },
            { id: "3", texto: "más de 70 m2", elimina: [] },
        ],
    }
    ,
    { 
        pregunta:"¿Hay niños pequeños en la vivienda?",
        respuestas: [
            { id: "1", texto: "Sí", elimina: 
                [
                    "Pastor alemán",
                    "Doberman",
                    "Rottweiler",
                    "Akita",
                    "San Bernardo"
                  ]
            },
            { id: "2", texto: "No", elimina: [] },
        ],
    },
    {
        pregunta:"¿Alguien de tu familia sufre algún tipo de alergia al pelo?",
        respuestas: [
            { id: "1", texto: "Sí", elimina:[
                "Pastor alemán",
                "Doberman",
                "Boyero de berna",
                "Rottweiler",
                "Akita",
                "San Bernardo",
                "Terranova",
                "Samoyedo",
                "Labrador retriever",
                "Golden retriever",
                "Border collie",
                "Pastor Collie",
                "Siberian Husky"
              ]},
            { id: "2", texto: "No", elimina:[]},
        ],     
    },
    {
        pregunta:"¿Cuántas horas libres posees al día?",
        respuestas: [
            { id: "1", texto: "Menos de 3 horas", elimina:[
                "Pastor alemán",
                "Doberman",
                "Boyero de berna",
                "Rottweiler",
                "Akita",
                "San Bernardo",
                "Terranova",
                "Samoyedo",
                "Labrador retriever",
                "Golden retriever",
                "Border collie",
                "Pastor Collie",
                "Siberian Husky"
              ] },
            { id: "2", texto: "Entre 3 y 5 horas", elimina:[
                "Pastor alemán",
                "Doberman",
                "Boyero de berna",
                "Rottweiler",
                "Akita",
                "San Bernardo",
                "Terranova",
                "Border collie",
                "Pastor Collie"
              ]
               },
            { id: "3", texto: "Más de 5 horas", elimina:[] },
        ],
    },
    {
        pregunta:"¿Realizas algún tipo de ejercicio al aire libre (correr, trotar, patinaje…)? ",
        respuestas: [
            { id: "1", texto: "Sí", elimina:[]},
            { id: "2", texto: "No", elimina:[
                "Pastor alemán",
                "Doberman",
                "Boyero de berna",
                "Rottweiler",
                "Akita",
                "San Bernardo",
                "Terranova",
                "Samoyedo",
                "Labrador retriever",
                "Golden retriever",
                "Border collie",
                "Pastor Collie",
                "Siberian Husky"
              ]
              },
        ],
    },
    {
        pregunta:"¿Qué buscas al tener un perro en casa?",
        respuestas: [
            { id: "1", texto: "Cariño", elimina:[]},
            { id: "2", texto: "Compañía", elimina:[]},
            { id: "3", texto: "Protección", elimina:[
                "Bulldog Inglés",
                "Cocker Spaniel",
                "Bulldog francés",
                "Beagle",
                "Perro salchicha",
                "Schnauzer",
                "Yorkshire",
                "Pomerania",
                "Shih tzu"
              ]
              },
        ],
    },

]; 
              

export default preguntas;