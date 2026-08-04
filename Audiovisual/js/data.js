// Datos de la Biblioteca de recursos audiovisuales — Unidad didáctica 3 (Tecnologías Emergentes).
// Campos disponibles por recurso: ver README.md de la plantilla (TEUX_UD2-main).
// Esta biblioteca no incluye materialType/yearContext/language desglosados como
// la biblioteca teórica, porque el PDF de origen solo da "Tema principal" y "Relevancia"
// por recurso; el tipo de material se ha inferido del propio texto de relevancia.
const RESOURCES = [
  {
    id: 1,
    name: "Designing the Future | Anab Jain (TED)",
    nameSpanish: "Designing the Future | Anab Jain (TED)",
    section: "Especulación y diseño de ficciones",
    materialType: "Charla TED",
    relevance: "En esta charla TED, Anab Jain, la cofundadora de Superflux, explica cómo su estudio construye futuros que se pueden tocar y respirar y por qué lo hacen. Este material constituye una introducción muy accesible al oficio de especular.",
    embedUrl: "https://www.youtube.com/embed/-stunrZcB24",
    link: "https://www.youtube.com/watch?v=-stunrZcB24"
  },
  {
    id: 2,
    name: "Galería audiovisual de Near Future Laboratory",
    nameSpanish: "Galería audiovisual de Near Future Laboratory",
    section: "Especulación y diseño de ficciones",
    materialType: "Galería audiovisual",
    // La URL de origen ya no resuelve (404 en nearfuturelaboratory.com); se mantiene por ser la del documento fuente.
    relevance: "En esta galería audiovisual encontrarás artefactos diegéticos reales del laboratorio que popularizó el término.",
    link: "https://nearfuturelaboratory.com/design-fiction-examples"
  },
  {
    id: 3,
    name: "Unlocking the Future with Design Fiction | Julian Bleecker",
    nameSpanish: "Unlocking the Future with Design Fiction | Julian Bleecker",
    section: "Especulación y diseño de ficciones",
    materialType: "Pódcast",
    relevance: "En este pódcast, Julian Bleecker (el autor del ensayo fundacional sobre Design Fiction) habla del origen y el uso de este método.",
    embedUrl: "https://www.youtube.com/embed/ax6d8LXZkcg",
    link: "https://www.youtube.com/watch?v=ax6d8LXZkcg"
  },
  {
    id: 4,
    name: "Presentación de Speculative Everything | Anthony Dunne y Fiona Raby",
    nameSpanish: "Presentación de Speculative Everything | Anthony Dunne y Fiona Raby",
    section: "Especulación y diseño de ficciones",
    materialType: "Vídeo",
    relevance: "Los autores de Speculative Everything presentan su trabajo en el que toman al diseño como pregunta y no como solución.",
    embedUrl: "https://www.youtube.com/embed/kmibm20UsoA",
    link: "https://www.youtube.com/watch?v=kmibm20UsoA"
  },
  {
    id: 5,
    name: "Glosario del cono de futuros | UN Global Pulse",
    nameSpanish: "Glosario del cono de futuros | UN Global Pulse",
    section: "El cono de futuros",
    materialType: "Glosario con infografías",
    relevance: "En este glosario con infografías, podrás ver una visión institucional del cono de futuros en cinco minutos.",
    embedUrl: "https://foresight.unglobalpulse.net/blog/glossaries/futures-cone",
    link: "https://foresight.unglobalpulse.net/blog/glossaries/futures-cone"
  },
  {
    id: 6,
    name: "The Futures Cone | Joseph Voros",
    nameSpanish: "The Futures Cone | Joseph Voros",
    section: "El cono de futuros",
    materialType: "Blog",
    relevance: "En este blog, Joseph Voros cuenta la historia y el uso del cono de futuros.",
    embedUrl: "https://thevoroscope.com/2017/02",
    link: "https://thevoroscope.com/2017/02"
  },
  {
    id: 7,
    name: "El cono de Voros capa a capa",
    nameSpanish: "El cono de Voros capa a capa",
    section: "El cono de futuros",
    materialType: "Pódcast (una hora)",
    relevance: "En este pódcast de una hora se desarma el cono de Voros capa por capa en una conversación que resulta muy útil cuando el diagrama se entiende, pero aún no se sabe operar.",
    embedUrl: "https://www.youtube.com/embed/wc_e3dsY-vw",
    link: "https://www.youtube.com/watch?v=wc_e3dsY-vw"
  },
  {
    id: 8,
    name: "Designing Experiences for Higher Quality Foresight | Stuart Candy",
    nameSpanish: "Designing Experiences for Higher Quality Foresight | Stuart Candy",
    section: "El cono de futuros",
    materialType: "Conferencia",
    relevance: "En esta conferencia Stuart Candy habla sobre cómo convertir la prospectiva en experiencias tangibles. Es un material que resulta sumamente interesante como puente entre el cono de futuros y el prototipo diegético que construirás.",
    embedUrl: "https://www.youtube.com/embed/wEldDuFcs_4",
    link: "https://www.youtube.com/watch?v=wEldDuFcs_4"
  },
  {
    // El documento de origen no incluye una URL para este recurso; no se ha inventado ninguna.
    id: 9,
    name: "Oops, Our Bad",
    nameSpanish: "Oops, Our Bad",
    section: "Consecuencias no buscadas",
    materialType: "Pódcast (media hora)",
    relevance: "Este pódcast revisa en media hora casos históricos de consecuencias no buscadas. Es muy interesante de escuchar porque cada caso se explora desde la narrativa. La visión que ofrece este recurso es ideal para tener un primer contacto con la temática de las consecuencias no buscadas."
  },
  {
    id: 10,
    name: "And Then What?",
    nameSpanish: "And Then What?",
    section: "Consecuencias no buscadas",
    materialType: "Capítulo interactivo en línea",
    relevance: "Este material es ideal para explorar la mecánica de los efectos de segundo y tercer orden con bucles, que conforman el motor de la rueda de futuros en versión operativa.",
    embedUrl: "https://qut.pressbooks.pub/systemcraft-systems-thinking/chapter/and-then-what",
    link: "https://qut.pressbooks.pub/systemcraft-systems-thinking/chapter/and-then-what"
  },
  {
    id: 11,
    name: "Facilitating the Exploration of Undesirable Consequences of Digital Technologies",
    nameSpanish: "Facilitating the Exploration of Undesirable Consequences of Digital Technologies",
    section: "Consecuencias no buscadas",
    materialType: "Artículo académico y demo",
    relevance: "Este artículo y demo conforman una herramienta académica que resulta ideal para explorar consecuencias indeseadas de productos con IA porque convierte a la temática de las consecuencias no buscadas en un instrumento de trabajo actual.",
    link: "https://dl.acm.org/doi/10.1145/3613904.3642054"
  },
  {
    id: 12,
    name: "Artefact Design and Societal Worldview",
    nameSpanish: "Artefact Design and Societal Worldview",
    section: "La política de los artefactos",
    materialType: "Artículo académico",
    relevance: "Este material constituye la tesis de Winner sobre la política de artefactos, pero actualizada a los sistemas de IA.",
    link: "https://royalsocietypublishing.org/doi/10.1098/rsta.2024.0092"
  },
  {
    id: 13,
    name: "Machine Bias | ProPublica",
    nameSpanish: "Machine Bias | ProPublica",
    section: "Casos reales de fallos",
    materialType: "Investigación periodística",
    relevance: "Este material constituye la investigación que dejó vislumbrar el sesgo algorítmico en la justicia penal estadounidense. Es un caso fundacional del periodismo de rendición de cuentas algorítmica.",
    link: "https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing"
  },
  {
    id: 14,
    name: "Racial Bias in AI: Man Wrongly Identified by Facial Recognition Technology",
    nameSpanish: "Racial Bias in AI: Man Wrongly Identified by Facial Recognition Technology",
    section: "Casos reales de fallos",
    materialType: "Vídeo (cuatro minutos)",
    relevance: "Este vídeo de cuatro minutos informa sobre la primera detención conocida por un falso positivo de reconocimiento facial. Es un excelente ejemplo de una consecuencia no buscada.",
    embedUrl: "https://www.youtube.com/embed/Cx284WjpEQY",
    link: "https://www.youtube.com/watch?v=Cx284WjpEQY"
  },
  {
    id: 15,
    name: "Coded Bias",
    nameSpanish: "Coded Bias",
    section: "Casos reales de fallos",
    materialType: "Documental (Netflix)",
    relevance: "Este documental de Netflix sobre sesgo y reconocimiento facial presenta en formato panorámico y accesible la investigación de Joy Buolamwini sobre esta consecuencia no buscada.",
    link: "https://www.netflix.com/title/81328723"
  },
  {
    id: 16,
    name: "Superflux: Uninvited Guests",
    nameSpanish: "Superflux: Uninvited Guests",
    section: "Objetos inteligentes, realidad extendida e interacción",
    materialType: "Cortometraje (cinco minutos)",
    relevance: "Este cortometraje sobre objetos inteligentes del hogar muestra en una ficción de cinco minutos la vida cotidiana de un hombre mayor y su interacción con tecnología bienintencionada. Es un material interesante porque permite ver el choque entre el diseño implícito y la agencia de las personas sin recurrir a la teoría.",
    embedUrl: "https://www.youtube.com/embed/Ear8W-C96bk",
    link: "https://www.youtube.com/watch?v=Ear8W-C96bk"
  },
  {
    id: 17,
    name: "Designing for XR",
    nameSpanish: "Designing for XR",
    section: "Objetos inteligentes, realidad extendida e interacción",
    materialType: "Vídeo",
    relevance: "Este material sobre diseño de interacción en realidad extendida presenta a dos referentes del campo y permite aprender más sobre la profundidad técnica de su labor.",
    embedUrl: "https://www.youtube.com/embed/5wYHDLm-rtw",
    link: "https://www.youtube.com/watch?v=5wYHDLm-rtw"
  },
  {
    id: 18,
    name: "From Experiential Futures to Social Foresight",
    nameSpanish: "From Experiential Futures to Social Foresight",
    section: "Objetos inteligentes, realidad extendida e interacción",
    materialType: "Conferencia",
    relevance: "Esta conferencia va de los futuros experienciales a la prospectiva social y permite que veas cómo escala el método que se aprende en esta unidad didáctica más allá del producto.",
    embedUrl: "https://www.youtube.com/embed/bORoaGmXwwI",
    link: "https://www.youtube.com/watch?v=bORoaGmXwwI"
  }
];
