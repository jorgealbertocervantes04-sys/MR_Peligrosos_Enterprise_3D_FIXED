import type {CourseModule,ModuleId,QuizQuestion} from '../types/course';
export const COURSE_MODULES:CourseModule[]=[
{id:0,title:'Evaluación diagnóstica',shortTitle:'Diagnóstico',eyebrow:'MÓDULO 00 · PUNTO DE PARTIDA',duration:'8 min',objective:'Medir conocimientos previos.'},
{id:1,title:'Conceptos básicos',shortTitle:'Conceptos',eyebrow:'MÓDULO 01 · FUNDAMENTOS',duration:'12 min',objective:'Diferenciar material, residuo, remanente, envase y embalaje.'},
{id:2,title:'Marco legal',shortTitle:'Marco legal',eyebrow:'MÓDULO 02 · CONTROL',duration:'15 min',objective:'Reconocer el marco legal presentado y sus implicaciones operativas.'},
{id:3,title:'Identificación de riesgos',shortTitle:'Riesgos',eyebrow:'MÓDULO 03 · IDENTIFICACIÓN',duration:'22 min',objective:'Interpretar clases, NFPA 704, SGA y señales de identificación.'},
{id:4,title:'Normativa SCT',shortTitle:'SCT / NOMs',eyebrow:'MÓDULO 04 · TRANSPORTE',duration:'20 min',objective:'Aplicar criterios visuales de identificación en la unidad.'},
{id:5,title:'Operatividad y prevención',shortTitle:'Operación',eyebrow:'MÓDULO 05 · PREVENCIÓN',duration:'18 min',objective:'Tomar decisiones sobre documentos, almacenamiento y derrames.'},
{id:6,title:'Examen final',shortTitle:'Examen',eyebrow:'MÓDULO 06 · CERTIFICACIÓN',duration:'15 min',objective:'Demostrar competencia y obtener un reporte.'}
];
export const DIAGNOSTIC_QUESTIONS:QuizQuestion[]=[
{id:'diag-1',prompt:'La gasolina aparece en el material como ejemplo de:',options:[{id:'a',label:'Clase 1 · Explosivos'},{id:'b',label:'Clase 2 · Gases'},{id:'c',label:'Clase 3 · Líquidos inflamables',isCorrect:true,explanation:'El material presenta gasolina en Clase 3.'},{id:'d',label:'Clase 8 · Corrosivos'}],points:1},
{id:'diag-2',prompt:'¿Qué elemento forma parte de la identificación del material en la unidad?',options:[{id:'a',label:'Número UN',isCorrect:true,explanation:'La presentación muestra el número de identificación del material, UN.'},{id:'b',label:'Horario del conductor'},{id:'c',label:'Color del uniforme'},{id:'d',label:'Número personal'}],points:1},
{id:'diag-3',prompt:'¿Qué herramienta de consulta rápida se menciona para primeros respondientes?',options:[{id:'a',label:'GRE',isCorrect:true,explanation:'La presentación la incluye como herramienta de consulta rápida.'},{id:'b',label:'Lista de asistencia'},{id:'c',label:'Bitácora contable'},{id:'d',label:'Organigrama'}],points:1},
{id:'diag-4',prompt:'Antes de almacenar juntos materiales de distintas clases, la práctica indicada es:',options:[{id:'a',label:'Consultar compatibilidad y segregación',isCorrect:true},{id:'b',label:'Juntarlos para ahorrar espacio'},{id:'c',label:'Elegir por color de envase'},{id:'d',label:'Decidir por antigüedad'}],points:1}
];
export const FINAL_QUESTIONS:QuizQuestion[]=[
{id:'final-1',prompt:'¿Qué debe hacer un envase o embalaje para comunicar el riesgo?',options:[{id:'a',label:'Contar con etiqueta o etiquetas que identifiquen contenido y riesgo',isCorrect:true,explanation:'El material presenta esta obligación en el Artículo 31.'},{id:'b',label:'No requiere identificación visual'},{id:'c',label:'Solo necesita peso'},{id:'d',label:'Solo nombre comercial'}],points:2},
{id:'final-2',prompt:'¿Qué debe portar la unidad para identificar la sustancia, material o residuo que transporta?',options:[{id:'a',label:'Carteles o rótulos de identificación',isCorrect:true,explanation:'El material señala carteles o rótulos en la unidad.'},{id:'b',label:'Solo nombre del operador'},{id:'c',label:'Una señal de velocidad'},{id:'d',label:'Solo una calcomanía interna'}],points:2},
{id:'final-3',prompt:'¿Qué incluye la información de emergencia descrita en el curso?',options:[{id:'a',label:'Riesgos, primeros auxilios, incendio, fuga/derrame, protección y contactos',isCorrect:true},{id:'b',label:'Solo teléfonos'},{id:'c',label:'Solo nombre del material'},{id:'d',label:'Solo peso del embarque'}],points:2},
{id:'final-4',prompt:'¿Cuál es una condición de almacenamiento que el material recomienda?',options:[{id:'a',label:'Contar con kits antiderrame',isCorrect:true,explanation:'La presentación incluye kits antiderrame.'},{id:'b',label:'Mantener focos de calor activos'},{id:'c',label:'Bloquear accesos'},{id:'d',label:'Eliminar señalización'}],points:2},
{id:'final-5',prompt:'La tabla de compatibilidad sirve para:',options:[{id:'a',label:'Tomar decisiones de compatibilidad y segregación',isCorrect:true},{id:'b',label:'Calcular nómina'},{id:'c',label:'Registrar asistencia'},{id:'d',label:'Definir horarios'}],points:2}
];
export const MODULE_ID_ORDER:ModuleId[]=[0,1,2,3,4,5,6];
