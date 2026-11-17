const questions = [
    {
        "text": "¿Quién responde si un empleado sufre un accidente laboral?",
        "options": [
            "El empleador",
            "La EPS",
            "El compañero de trabajo",
            "El Ministerio de Trabajo"
        ],
        "correct": 0
    },
    {
        "text": "¿Quién responde si un contratista sufre un accidente laboral?",
        "options": [
            "El empleador del contratista",
            "La empresa de seguros del Estado",
            "El supervisor directo",
            "El contratista, con apoyo de su ARL"
        ],
        "correct": 3
    },
    {
        "text": "¿Quién responde si un empleado sufre un accidente laboral en un vehículo de la empresa?",
        "options": [
            "El conductor del vehículo",
            "El empleador, si el accidente ocurre durante funciones laborales",
            "La empresa de transporte público",
            "La aseguradora del vehículo personal del empleado"
        ],
        "correct": 1
    },
    {
        "text": "¿Cuál es la principal función del SG-SST?",
        "options": [
            "Prevenir accidentes y enfermedades laborales",
            "Aumentar la productividad",
            "Reducir costos operativos",
            "Mejorar la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué entidad regula el SG-SST en Colombia?",
        "options": [
            "El Ministerio de Salud y Protección Social",
            "La Superintendencia de Salud",
            "El Ministerio de Trabajo",
            "La ARL"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una ARL?",
        "options": [
            "Administradora de Riesgos Laborales",
            "Asociación de Riesgos Laborales",
            "Agencia de Riesgos Laborales",
            "Área de Riesgos Laborales"
        ],
        "correct": 0
    },
    {
        "text": "¿Cuál es el objetivo principal de una ARL?",
        "options": [
            "Prevenir accidentes y enfermedades laborales",
            "Aumentar la productividad",
            "Reducir costos operativos",
            "Mejorar la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe hacer un empleado en caso de sufrir un accidente laboral?",
        "options": [
            "Reportarlo inmediatamente a su superior",
            "Ignorarlo y seguir trabajando",
            "Esperar a que alguien más lo reporte",
            "Ir a casa y descansar"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es un riesgo laboral?",
        "options": [
            "La posibilidad de sufrir un accidente o enfermedad en el trabajo",
            "La posibilidad de perder el empleo",
            "La posibilidad de recibir una sanción",
            "La posibilidad de recibir un ascenso"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es un accidente laboral?",
        "options": [
            "Un evento que causa daño o enfermedad en el trabajo",
            "Un evento que causa pérdida de empleo",
            "Un evento que causa una sanción",
            "Un evento que causa un ascenso"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una enfermedad laboral?",
        "options": [
            "Una enfermedad causada por condiciones del trabajo",
            "Una enfermedad causada por condiciones personales",
            "Una enfermedad causada por condiciones ambientales",
            "Una enfermedad causada por condiciones familiares"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe incluir un SG-SST?",
        "options": [
            "Políticas, procedimientos y recursos para prevenir riesgos laborales",
            "Políticas para aumentar la productividad",
            "Procedimientos para reducir costos operativos",
            "Recursos para mejorar la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Quién es responsable de implementar el SG-SST?",
        "options": [
            "El empleador",
            "El empleado",
            "La ARL",
            "El Ministerio de Trabajo"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe hacer un empleador en caso de un accidente laboral?",
        "options": [
            "Investigar el accidente y tomar medidas correctivas",
            "Ignorar el accidente",
            "Esperar a que alguien más lo investigue",
            "Despedir al empleado"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una inspección de seguridad?",
        "options": [
            "Una revisión de las condiciones de trabajo para identificar riesgos",
            "Una revisión de la productividad",
            "Una revisión de los costos operativos",
            "Una revisión de la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una capacitación en SST?",
        "options": [
            "Un entrenamiento para prevenir accidentes y enfermedades laborales",
            "Un entrenamiento para aumentar la productividad",
            "Un entrenamiento para reducir costos operativos",
            "Un entrenamiento para mejorar la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe hacer un empleado en caso de identificar un riesgo laboral?",
        "options": [
            "Reportarlo inmediatamente a su superior",
            "Ignorarlo y seguir trabajando",
            "Esperar a que alguien más lo reporte",
            "Ir a casa y descansar"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es un plan de emergencia?",
        "options": [
            "Un conjunto de acciones para responder a situaciones de emergencia",
            "Un conjunto de acciones para aumentar la productividad",
            "Un conjunto de acciones para reducir costos operativos",
            "Un conjunto de acciones para mejorar la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe incluir un plan de emergencia?",
        "options": [
            "Procedimientos, recursos y responsabilidades para responder a emergencias",
            "Procedimientos para aumentar la productividad",
            "Recursos para reducir costos operativos",
            "Responsabilidades para mejorar la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Quién es responsable de desarrollar un plan de emergencia?",
        "options": [
            "El empleador",
            "El empleado",
            "La ARL",
            "El Ministerio de Trabajo"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe hacer un empleador en caso de una emergencia?",
        "options": [
            "Activar el plan de emergencia y coordinar la respuesta",
            "Ignorar la emergencia",
            "Esperar a que alguien más la coordine",
            "Despedir al empleado"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una evaluación de riesgos?",
        "options": [
            "Un análisis de las condiciones de trabajo para identificar riesgos",
            "Un análisis de la productividad",
            "Un análisis de los costos operativos",
            "Un análisis de la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe incluir una evaluación de riesgos?",
        "options": [
            "Identificación, análisis y control de riesgos laborales",
            "Identificación de la productividad",
            "Análisis de los costos operativos",
            "Control de la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Quién es responsable de realizar una evaluación de riesgos?",
        "options": [
            "El empleador",
            "El empleado",
            "La ARL",
            "El Ministerio de Trabajo"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe hacer un empleador en caso de identificar un riesgo laboral?",
        "options": [
            "Tomar medidas correctivas para eliminar o controlar el riesgo",
            "Ignorar el riesgo",
            "Esperar a que alguien más lo controle",
            "Despedir al empleado"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una auditoría de SST?",
        "options": [
            "Una revisión de la implementación del SG-SST para asegurar su eficacia",
            "Una revisión de la productividad",
            "Una revisión de los costos operativos",
            "Una revisión de la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué debe incluir una auditoría de SST?",
        "options": [
            "Evaluación de políticas, procedimientos y resultados del SG-SST",
            "Evaluación de la productividad",
            "Evaluación de los costos operativos",
            "Evaluación de la imagen de la empresa"
        ],
        "correct": 0
    },
    {
        "text": "¿Quién es responsable de realizar una auditoría de SST?",
        "options": [
            "El empleador",
            "El empleado",
            "La ARL",
            "El Ministerio de Trabajo"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)?",
        "options": [
            "Un conjunto de normas para la seguridad en el hogar",
            "Un sistema para gestionar la seguridad y salud en el trabajo",
            "Un programa de entrenamiento físico",
            "Un conjunto de reglas para la seguridad vial"
        ],
        "correct": 1
    },
    {
        "text": "¿Cuál es el objetivo principal del SG-SST?",
        "options": [
            "Reducir los costos operativos",
            "Mejorar la productividad",
            "Prevenir accidentes y enfermedades laborales",
            "Aumentar las ventas"
        ],
        "correct": 2
    },
    {
        "text": "¿Qué entidad en Colombia regula el SG-SST?",
        "options": [
            "El Ministerio de Educación",
            "El Ministerio de Salud y Protección Social",
            "El Ministerio de Transporte",
            "El Ministerio de Comercio"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es un riesgo laboral?",
        "options": [
            "Una situación que puede causar daño o enfermedad en el trabajo",
            "Una oportunidad de negocio",
            "Una inversión financiera",
            "Un problema de transporte"
        ],
        "correct": 0
    },
    {
        "text": "¿Qué es una enfermedad laboral?",
        "options": [
            "Una enfermedad que se adquiere fuera del trabajo",
            "Una enfermedad que se adquiere en el trabajo debido a condiciones laborales",
            "Una enfermedad genética",
            "Una enfermedad contagiosa"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es un accidente laboral?",
        "options": [
            "Un accidente que ocurre en el hogar",
            "Un accidente que ocurre en el trabajo o durante actividades laborales",
            "Un accidente de tráfico",
            "Un accidente deportivo"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una evaluación de riesgos?",
        "options": [
            "Un análisis de las oportunidades de negocio",
            "Un análisis de los riesgos laborales para prevenir accidentes y enfermedades",
            "Una evaluación financiera",
            "Una evaluación de desempeño"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una medida preventiva?",
        "options": [
            "Una acción para aumentar las ventas",
            "Una acción para prevenir accidentes y enfermedades laborales",
            "Una acción para mejorar la productividad",
            "Una acción para reducir costos"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una medida correctiva?",
        "options": [
            "Una acción para corregir errores financieros",
            "Una acción para corregir problemas de seguridad y salud en el trabajo",
            "Una acción para mejorar la calidad del producto",
            "Una acción para aumentar la eficiencia"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es un plan de emergencia?",
        "options": [
            "Un plan para aumentar las ventas",
            "Un plan para responder a situaciones de emergencia en el trabajo",
            "Un plan para mejorar la productividad",
            "Un plan para reducir costos"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una inspección de seguridad?",
        "options": [
            "Una revisión de los documentos financieros",
            "Una revisión de las condiciones de seguridad en el trabajo",
            "Una revisión de la calidad del producto",
            "Una revisión de la eficiencia operativa"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una capacitación en seguridad y salud en el trabajo?",
        "options": [
            "Un entrenamiento para mejorar la productividad",
            "Un entrenamiento para prevenir accidentes y enfermedades laborales",
            "Un entrenamiento para aumentar las ventas",
            "Un entrenamiento para reducir costos"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una política de seguridad y salud en el trabajo?",
        "options": [
            "Un conjunto de reglas para mejorar la calidad del producto",
            "Un conjunto de reglas para prevenir accidentes y enfermedades laborales",
            "Un conjunto de reglas para aumentar las ventas",
            "Un conjunto de reglas para reducir costos"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una auditoría de seguridad y salud en el trabajo?",
        "options": [
            "Una revisión de los documentos financieros",
            "Una revisión de las condiciones de seguridad y salud en el trabajo",
            "Una revisión de la calidad del producto",
            "Una revisión de la eficiencia operativa"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es un comité de seguridad y salud en el trabajo?",
        "options": [
            "Un grupo de empleados que se encarga de aumentar las ventas",
            "Un grupo de empleados que se encarga de prevenir accidentes y enfermedades laborales",
            "Un grupo de empleados que se encarga de mejorar la productividad",
            "Un grupo de empleados que se encarga de reducir costos"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una investigación de accidentes laborales?",
        "options": [
            "Una investigación de los documentos financieros",
            "Una investigación de las causas de los accidentes laborales para prevenir futuros incidentes",
            "Una investigación de la calidad del producto",
            "Una investigación de la eficiencia operativa"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una evaluación de desempeño en seguridad y salud en el trabajo?",
        "options": [
            "Una evaluación de la calidad del producto",
            "Una evaluación de la eficiencia operativa",
            "Una evaluación de las condiciones de seguridad y salud en el trabajo",
            "Una evaluación de los documentos financieros"
        ],
        "correct": 2
    },
    {
        "text": "¿Qué es una revisión de la política de seguridad y salud en el trabajo?",
        "options": [
            "Una revisión de las reglas para aumentar las ventas",
            "Una revisión de las reglas para prevenir accidentes y enfermedades laborales",
            "Una revisión de las reglas para mejorar la productividad",
            "Una revisión de las reglas para reducir costos"
        ],
        "correct": 1
    },
    {
        "text": "¿Qué es una evaluación de la efectividad de las medidas preventivas?",
        "options": [
            "Una evaluación de la calidad del producto",
            "Una evaluación de la eficiencia operativa",
            "Una evaluación de la efectividad de las acciones para prevenir accidentes y enfermedades laborales",
            "Una evaluación de los documentos financieros"
        ],
        "correct": 2
    },
    {
        "text": "¿Qué es una evaluación de la efectividad de las medidas correctivas?",
        "options": [
            "Una evaluación de la calidad del producto",
            "Una evaluación de la eficiencia operativa",
            "Una evaluación de la efectividad de las acciones para corregir problemas de seguridad y salud en el trabajo",
            "Una evaluación de los documentos financieros"
        ],
        "correct": 2
    }
];