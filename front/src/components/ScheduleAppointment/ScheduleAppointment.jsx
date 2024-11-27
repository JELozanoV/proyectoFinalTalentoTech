import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validateAppointment from "../../helpers/validateAppointment";
import styles from "./ScheduleAppointment.module.css"; 

function ScheduleAppointment() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const loggedInUserId = obtenerIdUsuarioAutenticado();
        setUserId(loggedInUserId);
    }, []);

    function obtenerIdUsuarioAutenticado() {
        return 1; 
    }

    function handleSubmit(appointmentData) {
        appointmentData.userId = userId;

        return axios.post("http://localhost:3000/appointments/schedule", appointmentData)
            .then(response => {
                console.log("Cita programada exitosamente:", response.data);
                alert("Cita programada exitosamente:");
                setUserId(response.data.userId); 

                navigate("/turnos");

                return response.data;
            })
            .catch(error => {
                console.error("Error al programar la cita:", error);
                alert("Inicia sesion para poder programar un turno.");
                throw error;
            });
    }

    return (
        <Formik
            initialValues={{
                date: "",
                time: "",
                description: ""
            }}
            validate={validateAppointment} 
            validateOnBlur 
            onSubmit={handleSubmit}
        >
            {() => (
                <Form className={styles.appointmentForm}> 
                    <h2>Agendar turno</h2>

                    <div>
                        <label>Fecha</label>
                        <Field type="date" name="date" />
                        <ErrorMessage name="date" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Hora</label>
                        <Field type="time" name="time" />
                        <ErrorMessage name="time" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <div>
                        <label>Descripción</label>
                        <Field as="textarea" name="description" />
                        <ErrorMessage name="description" component="div" className={`${styles.errorText} error-text`} />
                    </div>

                    <button type="submit">Programar turno</button>
                </Form>
            )}
        </Formik>
    );
}

export default ScheduleAppointment;