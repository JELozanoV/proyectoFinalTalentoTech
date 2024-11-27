const validateAppointment = (values) => {
    const errors = {};

    if (values.date) {
        const selectedDate = new Date(values.date);
        const currentDate = new Date();
        if (selectedDate < currentDate) {
            errors.date = "La fecha no puede ser en el pasado";
        }
    } else {
        errors.date = "Debes seleccionar una fecha";
    }

    if (!values.time) {
        errors.time = "Debes seleccionar una hora";
    }

    if (!values.description) {
        errors.description = "Debes proporcionar una descripción de la cita";
    }

    return errors;
};

export default validateAppointment;
