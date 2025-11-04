document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("course-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription =
        document.getElementById("modal-description");
    const modalTarget = document.getElementById("modal-target");
    const modalDuration = document.getElementById("modal-duration");
    const modalSyllabus = document.getElementById("modal-syllabus");
    const modalRequirements =
        document.getElementById("modal-requirements");
    const modalPrice = document.getElementById("modal-price");
    const closeModal = document.getElementById("close-modal");

    const courseDetails = {
        "Bases de datos": {
            description:
                "Descubre cómo gestionar y organizar eficazmente datos empresariales y profesionales mediante el diseño y uso adecuado de bases de datos.",
            target: "Dirigido a estudiantes que desean dominar el manejo de datos en aplicaciones reales.",
            duration: "15 horas",
            syllabus: [
                "Introducción",
                "Motores importantes",
                "Diagrama entidad - relación",
                "Normalización",
                "Claves primarias y foráneas",
                "Prácticas",
            ],
            requirements: "Conocimientos básicos de programación.",
            price: "150 Bs",
        },
        "Programación básica": {
            description:
                "Curso diseñado para adquirir habilidades fundamentales de programación mediante ejercicios y proyectos breves.",
            target: "Ideal para principiantes sin experiencia previa en programación.",
            duration: "15 horas",
            syllabus: [
                "Introducción",
                "Configuración del entorno",
                "Variables y tipos",
                "Condicionales",
                "Bucles",
                "Vectores",
                "Funciones",
                "Introducción a la poo",
                "Proyecto final",
            ],
            requirements: "Ninguno.",
            price: "150 Bs",
        },
        "HTML + CSS + JS": {
            description:
                "Aprende a plasmar tus ideas en un sitio web, desde el diseño, la condimentacion, usabilidad, estética y la implementación de proyectos personales.",
            target: "Perfecto para quienes quieren iniciarse en el desarrollo web frontend.",
            duration: "9 horas",
            syllabus: [
                "Instalación de vscode y extensiones",
                "CSS3",
                "Interactividad",
                "DOM y eventos",
                "Deploy en plataformas gratuitas",
            ],
            requirements: "Computadora e internet",
            price: "150 Bs",
        },
        "Lógica de programación": {
            description:
                "Aprende a pensar como un desarrollador usando la lógica de programación a partir de ejemplos de la vida cotidiana.",
            target: "Recomendado como base antes de aprender cualquier lenguaje de programación.",
            duration: "9 horas",
            syllabus: [
                "¿Qué es la programación?",
                "Ejemplos reales",
                "Diagramas de flujo",
                "Ejercicios",
            ],
            requirements: "Ninguno.",
            price: "100 Bs",
        },
        "Node.js": {
            description:
                "Crea tu primer sistema web en javascript con el runtime nodejs y express para poder implementar proyectos y desplegar tus ideas.",
            target: "Para estudiantes con conocimientos previos en JavaScript que desean expandirse al backend.",
            duration: "30 horas",
            syllabus: [
                "¿Qué es node?",
                "Conceptos fundamentales",
                "Instalación de herramientas",
                "Instalación de de dependencias con npm",
                "Inicialización del proyecto",
                "Controladores",
                "Rutas",
                "Frontend",
            ],
            requirements: "JavaScript intermedio.",
            date: "30 horas",
            price: "250 Bs",
        },
        "IA para el estudio": {
            description:
                "Utiliza la inteligencia artifical para obtener una ventaja académica y prepararte para tus estudios universitarios, proyectos personales y más.",
            target: "Estudiantes de cualquier nivel que quieran estudiar menos y aprender más.",
            duration: "5 horas",
            syllabus: [
                "Servicios gratuitos",
                "Generación de resúmenes y mapas mentales",
                "Revisión activa con flashcards automáticos",
                "Preparación de examenes",
                "Técnicas de estudio",
                "Notebooklm",
            ],
            requirements: "Ninguno. Trae tu laptop o tablet.",
            price: "60 Bs",
        },
        "IA para idiomas": {
            description:
                "Impulsa tu aprendizaje de idiomas con inteligencia artificial, practicando conversaciones y disfrutando de historias interactivas y juegos gramaticales.",
            target: "Personas que estudian inglés, portugués o cualquier idioma y quieren practicar diariamente.",
            duration: "5 horas",
            syllabus: [
                "Práctica conversacional",
                "Uso de historias para aprender idiomas",
                "Planteamiento de ejercicios",
                "Expresiones idiomáticas y culturales",
                "Juegos gramaticales",
            ],
            requirements:
                "Nivel básico del idioma que quieres practicar.",
            price: "60 Bs",
        },
    };

    document.querySelectorAll(".view-course").forEach((button) => {
        button.addEventListener("click", (e) => {
            const card = e.target.closest(".course-card");
            if (!card) return;
            const courseName = card.dataset.course;
            const details = courseDetails[courseName];
            if (!details) return;

            modalTitle.textContent = courseName;
            modalDescription.textContent =
                details.description || "";
            modalTarget.textContent = details.target || "";
            modalDuration.textContent = details.duration || "";
            modalRequirements.textContent =
                details.requirements || "";
            modalPrice.textContent = details.price || "";

            modalSyllabus.innerHTML = "";
            (details.syllabus || []).forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                modalSyllabus.appendChild(li);
            });

            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});