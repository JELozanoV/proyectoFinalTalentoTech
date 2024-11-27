const validateLogin = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "El nombre de usuario es requerido";
    }
    if (!values.password) {
        errors.password = "La contraseña es requerida";
    }

    return errors;
};

export default validateLogin
