import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Register.module.css";
import './Register.css'
import axios from "axios";
import validateRegister from "../../helpers/validateRegister";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
     function handleSubmit(userData) {
        
        return axios.post("http://localhost:3000/users/register", userData)
            .then(response => {
               
                console.log("Registro exitoso:", response.data);
                alert("Registro exitoso:");
                navigate("/login")

                return response.data; 
            })
            .catch(error => {
                console.error("Error al registrar usuario:", error);
                if (error.response) {
                    if (error.response.status === 400) {
                       
                        alert("El usuario o correo ya están registrados");
                    } else {
                        
                        alert("El registro no se pudo concretar");
                    }
                } else {
                   
                    alert("Hubo un error en la conexión o en el servidor");
                }
                throw error;
            });
    }

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                nDni: "",
                username: "",
                password: "",
                confirmPassword: ""
            }}
            validate={validateRegister} // Añade la función de validación
            validateOnBlur // Validar en blur
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={styles.registerForm}>
                    <h2>Registrate</h2>

                    <div>
                        <label>Nombre</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Correo</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Número de Identificación</label>
                        <Field type="text" name="nDni" />
                        <ErrorMessage name="nDni" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Fecha de nacimiento</label>
                        <Field type="date" name="birthdate" />
                        <ErrorMessage name="birthdate" component="div" className={`${styles.errorText} error-text`} />
                    </div>


                    <div>
                        <label>Nombre de Usuario</label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Contraseña</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Confirmar contraseña</label>
                        <Field type="password" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <button type="submit">Registrar</button>
                </Form>
            )}
        </Formik>
    );
}

export default Register;
