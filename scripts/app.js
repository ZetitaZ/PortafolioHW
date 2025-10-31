const coursesInfo = {
  "Bases de datos": {
    description:
      "Curso práctico centrado en la organización y manejo de información dentro de proyectos de programación. Combina ejercicios con herramientas reales para que los estudiantes puedan crear, consultar y mantener datos de forma eficiente, sin teoría innecesaria.",
    target:
      "Dirigido a: personas con conocimientos básicos de programación que buscan integrar bases de datos en sus propios desarrollos",
  },
  "Programación básica": {
    description:
      "Curso diseñado para adquirir habilidades fundamentales de programación mediante ejercicios y proyectos breves. Se trabaja con estructuras de control, variables y funciones, aplicadas en situaciones concretas, sin extenderse en teoría innecesaria.",
    target:
      "Dirigido a: estudiantes y principiantes con interés en construir soluciones simples a través del código.",
  },
  "HTML + CSS + JS": {
    description:
      "Curso enfocado en la creación de páginas web funcionales y modernas. Combina la estructura con HTML, el diseño con CSS y la interactividad con JavaScript, usando ejemplos claros y proyectos prácticos.",
    target:
      "Dirigido a: personas con interés en el desarrollo web que buscan producir sitios y aplicaciones sencillas desde cero.",
  },
  "Lógica de programación": {
    description:
      "Curso orientado a fortalecer el pensamiento lógico aplicado a la programación. Incluye resolución de problemas, construcción de algoritmos y ejercicios de razonamiento, sin depender de un lenguaje específico.",
    target:
      "Dirigido a: quienes quieren consolidar la base conceptual necesaria para programar con eficacia en cualquier entorno.",
  },
  "Node.js": {
    description:
      "Curso práctico sobre desarrollo del lado del servidor utilizando Node.js. Se abordan la creación de aplicaciones, APIs y procesos básicos, con un enfoque en la implementación directa de proyectos funcionales.",
    target:
      "Dirigido a: desarrolladores con conocimientos previos de JavaScript interesados en el desarrollo backend.",
  },
  "IA para idiomas": {
    description:
      "Curso centrado en el uso de herramientas de inteligencia artificial aplicadas al aprendizaje de idiomas. Se exploran prácticas de conversación, corrección de textos y ejercicios de pronunciación mediante aplicaciones y modelos de lenguaje.",
    target:
      "Dirigido a: estudiantes y autodidactas que buscan complementar el aprendizaje de un idioma con recursos tecnológicos.",
  },
  "IA para estudiantes": {
    description:
      "Curso que integra herramientas de inteligencia artificial al estudio académico. Se utilizan recursos para organizar información, generar resúmenes, crear cuestionarios y apoyar la planificación del aprendizaje.",
    target:
      "Dirigido a: estudiantes de secundaria o universitarios interesados en optimizar su estudio mediante el uso de IA.",
  },
  "Privacidad en Internet": {
    description:
      "Curso orientado a la implementación de medidas prácticas para proteger la información personal en línea. Incluye gestión de contraseñas, configuración de dispositivos y buenas prácticas de seguridad digital.",
    target:
      "Dirigido a: usuarios habituales de Internet que buscan reducir riesgos y mantener el control sobre sus datos.",
  },
  "Protección digital para estudiantes": {
    description:
      "Curso sobre prevención de riesgos en entornos digitales, incluyendo estafas, manipulación, acoso y robo de identidad. Se presentan estrategias concretas para proteger la seguridad y el bienestar personal online.",
    target:
      "Dirigido a: estudiantes, docentes y familias interesados en fortalecer la seguridad digital y el uso responsable de Internet.",
  },
};

const modal = document.getElementById("course-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTarget = document.getElementById("modal-target");
const closeModal = document.getElementById("close-modal");

document.querySelectorAll(".view-course").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const courseName = e.target.parentElement.getAttribute("data-course");
    const course = coursesInfo[courseName];
    modalTitle.textContent = courseName;
    modalDescription.textContent = course.description;
    modalTarget.textContent = course.target;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
