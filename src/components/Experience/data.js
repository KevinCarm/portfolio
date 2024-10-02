const list = [
    {
        title: "Desarrollador APX",
        where: "Capgemini",
        when: "Marzo 2024 - Hoy",
        description:
            "Desarrollo de sistemas usando APX dentro de BBVA",
        skills: ["Java", "APX", "APIS"],
    },
    {
        title: "Desarrollador Java",
        where: "Coppel, Servicios Financieros",
        when: "Enero 2023 - Marzo 2024",
        description:
            "Desarrollo de sistemas bancarios y participación en el desarrollo del core bancario",
        skills: ["Java", "Spring Boot", "Insumos BIAN", "Servicios web"],
    },
    {
        title: "Variables del sistema",
        where: "Proyecto personal",
        when: "Agosto 2024",
        description: "Programa hecho con C# y windows forms que te permite ver, crear, editar y eliminar las variables del sistema en tu usuario actual o del sistema en general",
        skills: ["C#", "Windows Forms", "Environment Variables", "Windows", "Visual Studio"],
        images: ["/images/Variables/1.png", "/images/Variables/2.png", "/images/Variables/3.png"]
    },
    {
        title: "Simple curl hecho con Java",
        where: "Proyecto personal",
        when: "Febrero 2024",
        description:
            "Un programa de consola hecho en Java que simula ser un CURL, el cual te permite realizar peticiones http usando comandos desde la consola Java",
        skills: ["Java", "CLI", "Http", "Rest", "CompletableFuture"],
        images: ["/images/HttpCLI/1.png"],
    },
    {
        title: "App para consultar noticias online",
        where: "Proyecto personal",
        when: "Diciembre 2023",
        description:
            "Aplicación de android nativa que consulta noticias relacionadas a una palabra ingresada por el usuario",
        skills: ["Kotlin", "Android Studio", "Http", "Rest", "Retrofit"],
        images: [
            "/images/Noticias/1.png",
            "/images/Noticias/2.png",
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
            "/images/Gastos/1.png",
            "/images/Gastos/2.png",
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
            "/images/Clima/1.png",
            "/images/Clima/2.png",
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
