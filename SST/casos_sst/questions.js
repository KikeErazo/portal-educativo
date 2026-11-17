const questions = [
    {
        text: "¿Quién responde si un empleado sufre un accidente laboral?",
        options: [
            "El empleador",
            "La EPS",
            "El compañero de trabajo",
            "El Ministerio de Trabajo",
        ],
        correct: 0
    },
    {
        text: "¿Quién responde si un contratista sufre un accidente laboral?",
        options: [
            "El empleador del contratista",
            "La empresa de seguros del Estado",
            "El supervisor directo",
            "El contratista, con apoyo de su ARL",
        ],
        correct: 3
    },
    {
        text: "¿Quién responde si un empleado sufre un accidente laboral en un vehículo de la empresa?",
        options: [
            "El conductor del vehículo",
            "El empleador, si el accidente ocurre durante funciones laborales",
            "La empresa de transporte público",
            "La aseguradora del vehículo personal del empleado",
        ],
        correct: 1
    },
    {
        text: "¿Qué es el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST)?",
        options: [
            "Un conjunto de normas para la seguridad vial",
            "Un sistema para gestionar la salud y seguridad en el trabajo",
            "Un programa de bienestar social",
            "Un conjunto de normas para la seguridad en el hogar",
        ],
        correct: 1
    },
    {
        text: "¿Cuál es el objetivo principal del SG-SST?",
        options: [
            "Reducir los costos de la empresa",
            "Mejorar la productividad",
            "Prevenir accidentes y enfermedades laborales",
            "Aumentar la satisfacción del cliente",
        ],
        correct: 2
    },
    {
        text: "¿Qué entidad es responsable de la vigilancia del cumplimiento del SG-SST en Colombia?",
        options: [
            "El Ministerio de Salud",
            "El Ministerio de Trabajo",
            "La ARL",
            "La EPS",
        ],
        correct: 1
    },
    {
        text: "¿Qué es una ARL?",
        options: [
            "Administradora de Riesgos Laborales",
            "Asociación de Riesgos Laborales",
            "Agencia de Riesgos Laborales",
            "Autoridad de Riesgos Laborales",
        ],
        correct: 0
    },
    {
        text: "¿Cuál es la función principal de una ARL?",
        options: [
            "Proveer servicios de salud",
            "Gestionar los riesgos laborales",
            "Supervisar la productividad",
            "Asegurar la calidad de los productos",
        ],
        correct: 1
    },
    {
        text: "¿Qué debe hacer un empleado si sufre un accidente laboral?",
        options: [
            "Informar a su supervisor y a la ARL",
            "Ir a su casa",
            "Llamar a la policía",
            "Ignorar el accidente",
        ],
        correct: 0
    },
    {
        text: "¿Qué es un accidente laboral?",
        options: [
            "Un accidente que ocurre en el hogar",
            "Un accidente que ocurre en el trayecto al trabajo",
            "Un accidente que ocurre durante el desempeño de funciones laborales",
            "Un accidente que ocurre durante el tiempo libre",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una enfermedad laboral?",
        options: [
            "Una enfermedad común",
            "Una enfermedad causada por factores relacionados con el trabajo",
            "Una enfermedad hereditaria",
            "Una enfermedad contagiosa",
        ],
        correct: 1
    },
    {
        text: "¿Qué debe incluir un programa de prevención de riesgos laborales?",
        options: [
            "Medidas para reducir los costos",
            "Medidas para aumentar la productividad",
            "Medidas para identificar, evaluar y controlar los riesgos laborales",
            "Medidas para mejorar la satisfacción del cliente",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una evaluación de riesgos laborales?",
        options: [
            "Un análisis de los costos de la empresa",
            "Un análisis de los riesgos laborales presentes en el lugar de trabajo",
            "Un análisis de la productividad",
            "Un análisis de la satisfacción del cliente",
        ],
        correct: 1
    },
    {
        text: "¿Qué es un plan de emergencia?",
        options: [
            "Un plan para aumentar la productividad",
            "Un plan para mejorar la satisfacción del cliente",
            "Un plan para responder a situaciones de emergencia en el lugar de trabajo",
            "Un plan para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué debe hacer un empleado en caso de una emergencia en el lugar de trabajo?",
        options: [
            "Ignorar la emergencia",
            "Seguir el plan de emergencia establecido",
            "Llamar a su familia",
            "Salir corriendo del lugar",
        ],
        correct: 1
    },
    {
        text: "¿Qué es una inspección de seguridad?",
        options: [
            "Una revisión de los costos de la empresa",
            "Una revisión de las condiciones de seguridad en el lugar de trabajo",
            "Una revisión de la productividad",
            "Una revisión de la satisfacción del cliente",
        ],
        correct: 1
    },
    {
        text: "¿Qué es una auditoría de seguridad y salud en el trabajo?",
        options: [
            "Una revisión de los costos de la empresa",
            "Una revisión de la productividad",
            "Una revisión del cumplimiento de las normas de seguridad y salud en el trabajo",
            "Una revisión de la satisfacción del cliente",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un comité de seguridad y salud en el trabajo?",
        options: [
            "Un grupo de empleados encargados de organizar eventos sociales",
            "Un grupo de empleados encargados de supervisar la productividad",
            "Un grupo de empleados encargados de promover y vigilar el cumplimiento de las normas de seguridad y salud en el trabajo",
            "Un grupo de empleados encargados de mejorar la satisfacción del cliente",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una política de seguridad y salud en el trabajo?",
        options: [
            "Un conjunto de normas para la seguridad vial",
            "Un conjunto de normas para la seguridad en el hogar",
            "Un conjunto de normas para la seguridad y salud en el trabajo",
            "Un conjunto de normas para la seguridad en el tiempo libre",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una capacitación en seguridad y salud en el trabajo?",
        options: [
            "Un curso sobre cómo aumentar la productividad",
            "Un curso sobre cómo mejorar la satisfacción del cliente",
            "Un curso sobre cómo identificar, evaluar y controlar los riesgos laborales",
            "Un curso sobre cómo reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un programa de vigilancia epidemiológica?",
        options: [
            "Un programa para aumentar la productividad",
            "Un programa para mejorar la satisfacción del cliente",
            "Un programa para identificar, evaluar y controlar los riesgos laborales",
            "Un programa para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una investigación de accidentes laborales?",
        options: [
            "Un análisis de los costos de la empresa",
            "Un análisis de los accidentes laborales ocurridos en el lugar de trabajo",
            "Un análisis de la productividad",
            "Un análisis de la satisfacción del cliente",
        ],
        correct: 1
    },
    {
        text: "¿Qué es un plan de acción correctiva?",
        options: [
            "Un plan para aumentar la productividad",
            "Un plan para mejorar la satisfacción del cliente",
            "Un plan para corregir las deficiencias identificadas en la gestión de la seguridad y salud en el trabajo",
            "Un plan para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un programa de bienestar laboral?",
        options: [
            "Un programa para aumentar la productividad",
            "Un programa para mejorar la satisfacción del cliente",
            "Un programa para promover el bienestar físico, mental y social de los empleados",
            "Un programa para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una evaluación de desempeño en seguridad y salud en el trabajo?",
        options: [
            "Un análisis de los costos de la empresa",
            "Un análisis de la productividad",
            "Un análisis del cumplimiento de las normas de seguridad y salud en el trabajo",
            "Un análisis de la satisfacción del cliente",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un programa de incentivos en seguridad y salud en el trabajo?",
        options: [
            "Un programa para aumentar la productividad",
            "Un programa para mejorar la satisfacción del cliente",
            "Un programa para incentivar el cumplimiento de las normas de seguridad y salud en el trabajo",
            "Un programa para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es una evaluación de impacto en seguridad y salud en el trabajo?",
        options: [
            "Un análisis de los costos de la empresa",
            "Un análisis de la productividad",
            "Un análisis del impacto de las medidas de seguridad y salud en el trabajo",
            "Un análisis de la satisfacción del cliente",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un programa de reconocimiento en seguridad y salud en el trabajo?",
        options: [
            "Un programa para aumentar la productividad",
            "Un programa para mejorar la satisfacción del cliente",
            "Un programa para reconocer el cumplimiento de las normas de seguridad y salud en el trabajo",
            "Un programa para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un programa de mejora continua en seguridad y salud en el trabajo?",
        options: [
            "Un programa para aumentar la productividad",
            "Un programa para mejorar la satisfacción del cliente",
            "Un programa para mejorar continuamente las condiciones de seguridad y salud en el trabajo",
            "Un programa para reducir los costos",
        ],
        correct: 2
    },
    {
        text: "¿Qué es un programa de gestión del cambio en seguridad y salud en el trabajo?",
        options: [
            "Un programa para aumentar la productividad",
            "Un programa para mejorar la satisfacción del cliente",
            "Un programa para gestionar los cambios en las condiciones de seguridad y salud en el trabajo",
            "Un programa para reducir los costos",
        ],
        correct: 2
    },
];
