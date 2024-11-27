const validateRegister = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = "El nombre es requerido";
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
        errors.name = "El nombre solo puede contener letras";
    }

    if (!values.email) {
        errors.email = "El correo es requerido";
    } else if (!/^\S+@\S+\.\S{2,}$/.test(values.email)) {
        errors.email = "El correo ingresado no es válido";
    }

    if (!values.birthdate) {
        errors.birthdate = "La fecha de nacimiento es requerida";
    } else {
        const currentDate = new Date();
        
        const birthdate = new Date(values.birthdate);
        
        if (birthdate.getTime() > currentDate.getTime()) {
            errors.birthdate = "La fecha de nacimiento no es valida ya que es un dia no transcurrido ";
        }
    }

    if (!values.nDni) {
        errors.nDni = "El número de identificación es requerido";
    } else if (!/^\d{5,}$/.test(values.nDni)) {
        errors.nDni = "El número de identificación debe tener al menos 5 dígitos";
    }


    if (!values.username) {
        errors.username = "El nombre de usuario es requerido";
    } else {
    }

    if (!values.password) {
        errors.password = "La contraseña es requerida";
    } else if (!/(?=.*[0-9])(?=.*[A-Z]).{8,}/.test(values.password)) {
        errors.password = "La contraseña debe contener al menos un número y una mayúscula, y tener al menos 8 caracteres";
    }

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Las contraseñas no coinciden";
    }

    return errors;
};

export default validateRegister