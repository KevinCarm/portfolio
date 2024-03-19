const list = [
    {
        title: "Desarrollador Java",
        where: "Coppel, Servicios Financieros",
        when: "Enero 2023 - Hoy",
        description:
            "Desarrollo de sistemas bancarios y participación en el desarrollo del core bancario",
        skills: ["Java", "Spring Boot", "Insumos BIAN", "Servicios web"],
    },
    {
        title: "Simple curl hecho con Java",
        where: "Proyecto personal",
        when: "Febrero 2024",
        description:
            "Un programa de consola hecho en Java que simula ser un CURL, el cual te permite realizar peticiones http usando comandos desde la consola Java",
        skills: ["Java", "CLI", "Http", "Rest", "CompletableFuture"],
        images: ["assets/images/HttpCLI/1.png"],
    },
    {
        title: "App para consultar noticias online",
        where: "Proyecto personal",
        when: "Diciembre 2023",
        description:
            "Aplicación de android nativa que consulta noticias relacionadas a una palabra ingresada por el usuario",
        skills: ["Kotlin", "Android Studio", "Http", "Rest", "Retrofit"],
        images: [
            "src\\assets\\images\\Noticias\\1.png",
            "src\\assets\\images\\Noticias\\2.png",
        ],
    },
    {
        title: "App de Registro de gastos",
        where: "Proyecto personal",
        when: "Octubre 2023",
        description:
            "Aplicación de android nativa que permite el registro de gastos diarios realizados, mostrando una lista dividida por fechas con sus respectivos gastos",
        skills: ["Kotlin", "Android Studio", "ROOM"],
        images: [
            "src\\assets\\images\\Gastos\\1.png",
            "src\\assets\\images\\Gastos\\2.png",
        ],
    },
    {
        title: "App para consulta de clima",
        where: "Proyecto personal",
        when: "Octubre 2022",
        description:
            "Aplicación de android nativa que muestra un mapa de google y al dar click en una ciudad se obtiene sus coordenadas con las cuales se consulta una api externa para obtener información del clima",
        skills: ["Kotlin", "Android Studio", "APIS", "View Model"],
        images: [
            "src\\assets\\images\\Clima\\1.png",
            "src\\assets\\images\\Clima\\2.png",
        ],
    },
    {
        title: "Servicio Back End con spring",
        where: "Proyecto personal",
        when: "Septiempre 2022",
        description:
            "Un servicio web creado con spring que utiliza jpa para la persistencia de datos y spring security junto con jwt para crear una autenticación simple",
        skills: ["Java", "Spring Boot", "APIS", "Spring Security", "JWT"],
    },
];

export default list;
