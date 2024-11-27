import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validateLogin from "../../helpers/validateLogin";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/slice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(values, { setSubmitting }) {
    axios
      .post("http://localhost:3000/users/login", values)
      .then((response) => {
        alert("Inicio de sesión exitoso");
        console.log("Respuesta del servidor:", response.data);
        dispatch(setUserId(response.data.id)); 
        navigate("/mis-turnos"); 
      })
      .catch((error) => {
        alert("Usuario no encontrado o contraseña inválida");
        console.error("Error:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validate={validateLogin}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.registerForm}>
          <h2>Iniciar Sesión</h2>
          <div>
            <label htmlFor="username">Nombre de Usuario</label>
            <Field type="text" name="username" className={styles.input} />
            <ErrorMessage
              name="username"
              component="div"
              className={`error-text ${styles.errorText}`}
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name="password" className={styles.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={`error-text ${styles.errorText}`}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Iniciar Sesión
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Login
