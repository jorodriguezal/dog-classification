const preguntas = [
    {
        pregunta: "¿De cuantos metros cuadrados es tu vivienda?",
        respuestas: [
            { id: "1", texto: "45 m2", elimina: [
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
    }
                  
    
]

export default preguntas;