import axios from "axios";
// import json;

let direccion = "https://3001-ceciliabper-activafitne-p0pj4px9069.ws-us73.gitpod.io";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            alumnos: [],
            alumno: {},
            mens: [],
            mensualidades: [],
            ejercicios: [],
            ejercicio: {}
        },
        actions: {
            // ************************************************
            //                  ALUMNOS						 //
            // ************************************************

            /* Crea un nuevo alumno*/
            crearAlumno: async (ci, name, last_name, phone, date_of_admission, birthday, mutualist, medical_conditions, medicines, training_goals, email, password, activities, role, is_active) => {
                try {
                    const response = await axios.post(direccion + "/api/user", {
                        ci: ci,
                        name: name,
                        last_name: last_name,
                        phone: phone,
                        date_of_admission: date_of_admission,
                        birthday: birthday,
                        mutualist: mutualist,
                        medical_conditions: medical_conditions,
                        medicines: medicines,
                        training_goals: training_goals,
                        email: email,
                        password: password,
                        activities: activities,
                        role: role,
                        is_active: is_active
                    });
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },

            /* Listar alumnos */
            obtenerAlumnos: async () => {
                try {
                    const response = await axios.get(direccion + "/api/user", {});
                    // console.log(response.data);
                    setStore({
                        alumnos: response.data
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Borrar alumno */
            borrarAlumno: async (id) => {
                try {
                    const response = await axios.delete(direccion + "/api/user/" + id, {});
                    // console.log(response);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // obtener alumno por Id

            obtenerAlumnoId: async (id) => {
                try {
                    const response = await axios.get(direccion + "/api/user/" + id, {});
                    // console.log(response.data);
                    setStore({
                        alumno: response.data
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar alumno
            modificarAlumno: async (id, ci, name, last_name, phone, admission, birthday, mutualist, conditions, medicines, training_goals, mail, password, activities, role, isActive) => {
                try {
                    const response = await axios.put(direccion + "/api/user/" + id, {
                        ci: ci,
                        name: name,
                        last_name: last_name,
                        phone: phone,
                        date_of_admission: admission,
                        birthday: birthday,
                        mutualist: mutualist,
                        medical_conditions: conditions,
                        medicines: medicines,
                        training_goals: training_goals,
                        email: mail,
                        password: password,
                        activities: activities,
                        role: role,
                        is_active: isActive
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //                  MENSUALIDADES				 //
            // ************************************************

            // obtener mensualidad por id de usuario
            obtenerMensualidadId: async (id) => {
                try {
                    const response = await axios.get(direccion + "/api/mensualidad/" + id, {});
                    console.log(response.data);
                    setStore({
                        mens: response.data
                    });
                    // console.log(mens);
                } catch (error) {
                    console.log(error);
                }
            },

            /* Listar mensualidades */
            obtenerMensualidades: async () => {
                try {
                    const response = await axios.get(direccion + "/api/mensualidades", {});
                    // console.log(response.data);
                    setStore({
                        mensualidades: response.data
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Modificar mensualidades */
            modificarMensualidad: async (id, user_id, payment_date, bill_n, payment_amount, description) => {
                try {
                    const response = await axios.put(direccion + "/api/mensualidades/" + id, {
                        id: id,
                        user_id: user_id,
                        payment_date: payment_date,
                        bill_n: bill_n,
                        payment_amount: payment_amount,
                        description: description
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Agregar nuevo pago de mensualidad */
            agregarPagoMensualidad: async (payment_date, payment_amount, description, bill_n, state, user_id) => { // payment_date: payment_date,
                try {
                    const response = await axios.post(direccion + "/api/mensualidades", {
                        payment_date: payment_date,
                        payment_amount: payment_amount,
                        description: description,
                        bill_n: bill_n,
                        state: state,
                        user_id: user_id
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
            },

            // ************************************************
            //                 EJERCICIOS 					 //
            // ************************************************

            /* Crea un nuevo ejercicio*/
            crearEjercicio: async (exercise_name, type_of_muscle, description, photo_exercise, video_exercise) => {
                try {
                    const response = await axios.post(direccion + "/api/ejercicios", {
                        exercise_name: exercise_name,
                        type_of_muscle: type_of_muscle,
                        description: description,
                        photo_exercise: photo_exercise,
                        video_exercise: video_exercise
                    });
                    console.log(response);
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },

            /* Listar ejercicios */
            obtenerEjercicios: async () => {
                try {
                    const response = await axios.get(direccion + "/api/ejercicios", {});
                    console.log(response.data);
                    setStore({
                        ejercicios: response.data
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // obtener ejercicio por Id
            obtenerEjercicioId: async (id) => {
                try {
                    const response = await axios.get(direccion + "/api/ejercicios/" + id, {});
                    console.log(response.data);
                    setStore({
                        ejercicio: response.data
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Borrar ejercicio */
            borrarEjercicio: async (id) => {
                try {
                    const response = await axios.delete(direccion + "/api/ejercicios/" + id, {});
                    console.log(response);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar ejercicio
            modificarEjercicio: async (id, exercise_name, type_of_muscle, description, photo_exercise, video_exercise) => {
                try {
                    const response = await axios.put(direccion + "/api/ejercicios/" + id, {
                        exercise_name: exercise_name,
                        type_of_muscle: type_of_muscle,
                        description: description,
                        photo_exercise: photo_exercise,
                        video_exercise: video_exercise
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try { // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => { // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index)
                        elm.background = color;


                    return elm;
                });

                // reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;