import axios from "axios";

let direccion = process.env.BACKEND_URL;

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
            mensualidad: {},
            mensualidades: [],
            ejercicios: [],
            ejercicio: {},
            productos: [],
            producto: {},
            rutinas: [],
            rutina: {},
            pendientes: [],
            pendiente: {},
            auth: false,
            profile: {},
            rutinasEjercicios: [],
            mercadopago: {},
            carrito: [],
            idCarrito: {},
        },
        actions: {
            // ************************************************
            //                 MERCADO PAGO  				 //
            // ************************************************
            pagoMercadoPago: async (cuota) => {
                try {
                    const response = await axios.post(
                        direccion + "/api/createPreference", {
                            cuota: cuota,
                        }
                    );
                    setStore({
                        mercadopago: response.data,
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
            },

            // ************************************************
            //                 LOGIN     					 //
            // ************************************************

            login: async (email, password) => {
                try {
                    console.log(email);
                    const response = await axios.post(direccion + "/api/login", {
                        email: email,
                        password: password,
                    });
                    localStorage.setItem("token", response.data.access_token);
                    setStore({
                        auth: true,
                        profile: response.data.user,
                    });
                    return response.data;
                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //              RUTAS PROTEGIDAS  				 //
            // ************************************************
            getProfile: async () => {
                let accessToken = localStorage.getItem("token");
                try {
                    const response = await axios.get(direccion + "/api/profile", {
                        headers: {
                            // Authorization: Bearer
                            Authorization: "Bearer " + accessToken,
                        },
                    });
                    setStore({
                        profile: response.data.user,
                    });
                    return true;
                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //            CHEQUEAR QUE EL TOKEN SEA VALIDO	 //
            // ************************************************
            checkValidToken: async () => {
                let accessToken = localStorage.getItem("token");
                try {
                    const response = await axios.get(direccion + "/api/validation", {
                        headers: {
                            // 'Authorization: Bearer
                            Authorization: "Bearer " + accessToken,
                        },
                    });
                    setStore({
                        auth: response.data.status,
                    });
                    return true;
                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        setStore({
                            auth: false,
                        });
                        console.log(error.response.data.msg);
                    }
                    return false;
                }
            },

            // ************************************************
            //                 LOG OUT  					 //
            // ************************************************

            logOut: () => {
                localStorage.removeItem("token");
                setStore({
                    auth: false,
                });
            },
            // ************************************************
            //                 CAMBIO DE CONTRASEÑA  		 //
            // ************************************************
            cambioPass: async (email) => {
                try {
                    const response = await axios.post(direccion + "/api/cambiarcontra", {
                        email: email,
                    });
                    if (response.status === 200) {
                        console.log("Se envió la contraseña");
                    }
                } catch (error) {
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //                  ALUMNOS						 //
            // ************************************************

            /* Crea un nuevo alumno*/
            crearAlumno: async (
                ci,
                name,
                last_name,
                phone,
                date_of_admission,
                birthday,
                mutualist,
                medical_conditions,
                medicines,
                training_goals,
                email,
                password,
                activities,
                role,
                is_active,
                cuota
            ) => {
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
                        is_active: is_active,
                        cuota: cuota,
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
                    setStore({
                        alumnos: response.data,
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
                    const response = await axios.delete(
                        direccion + "/api/user/" + id, {}
                    );
                    // console.log(response);
                    getActions().obtenerAlumnos();
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
                    setStore({
                        alumno: response.data,
                    });
                    return response.data;
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar alumno
            modificarAlumno: async (
                id,
                ci,
                name,
                last_name,
                phone,
                admission,
                birthday,
                mutualist,
                conditions,
                medicines,
                training_goals,
                mail,
                password,
                activities,
                role,
                isActive,
                cuota
            ) => {
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
                        is_active: isActive,
                        cuota: cuota,
                    });
                    //console.log(response.data);
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
                    const response = await axios.get(
                        direccion + "/api/mensualidad/" + id, {}
                    );
                    setStore({
                        mens: response.data,
                    });
                    // console.log(mens);
                } catch (error) {
                    console.log(error);
                }
            },

            // obtener mensualidad por Id
            obtenerMensualidadIdMensualidad: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/mensualidades/" + id, {}
                    );
                    console.log(response.data);
                    setStore({
                        mensualidad: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Listar mensualidades */
            obtenerMensualidades: async () => {
                try {
                    const response = await axios.get(
                        direccion + "/api/mensualidades", {}
                    );
                    // console.log(response.data);
                    setStore({
                        mensualidades: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Borrar mensualidades */
            borrarMensualidad: async (id) => {
                try {
                    const response = await axios.delete(
                        direccion + "/api/mensualidades/" + id, {}
                    );
                    // console.log(response);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Modificar mensualidades */
            modificarMensualidad: async (
                id,
                user_id,
                payment_date,
                bill_n,
                payment_amount,
                description
            ) => {
                try {
                    const response = await axios.put(
                        direccion + "/api/mensualidades/" + id, {
                            id: id,
                            user_id: user_id,
                            payment_date: payment_date,
                            bill_n: bill_n,
                            payment_amount: payment_amount,
                            description: description,
                        }
                    );
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Agregar nuevo pago de mensualidad */
            agregarPagoMensualidad: async (
                payment_date,
                payment_amount,
                description,
                bill_n,
                state,
                user_id
            ) => {
                // payment_date: payment_date,
                try {
                    const response = await axios.post(direccion + "/api/mensualidades", {
                        payment_date: payment_date,
                        payment_amount: payment_amount,
                        description: description,
                        bill_n: bill_n,
                        state: state,
                        user_id: user_id,
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
            crearEjercicio: async (
                exercise_name,
                type_of_muscle,
                description,
                photo_exercise,
                video_exercise
            ) => {
                try {
                    const response = await axios.post(direccion + "/api/ejercicios", {
                        exercise_name: exercise_name,
                        type_of_muscle: type_of_muscle,
                        description: description,
                        photo_exercise: photo_exercise,
                        video_exercise: video_exercise,
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
                    setStore({
                        ejercicios: response.data,
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
                    const response = await axios.get(
                        direccion + "/api/ejercicios/" + id, {}
                    );
                    console.log(response.data);
                    setStore({
                        ejercicio: response.data,
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
                    const response = await axios.delete(
                        direccion + "/api/ejercicios/" + id, {}
                    );
                    console.log(response);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar ejercicio
            modificarEjercicio: async (
                id,
                exercise_name,
                type_of_muscle,
                description,
                photo_exercise,
                video_exercise
            ) => {
                try {
                    const response = await axios.put(
                        direccion + "/api/ejercicios/" + id, {
                            exercise_name: exercise_name,
                            type_of_muscle: type_of_muscle,
                            description: description,
                            photo_exercise: photo_exercise,
                            video_exercise: video_exercise,
                        }
                    );
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //                 PRODUCTOS 					 //
            // ************************************************

            /* Crea nuevo producto*/
            crearProducto: async (name, stock, sale_price, photo, purchase_price) => {
                try {
                    await axios.post(direccion + "/api/productos", {
                        name: name,
                        stock: stock,
                        sale_price: sale_price,
                        photo: photo,
                        purchase_price: purchase_price,
                    });
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },

            /* Listar productos */
            obtenerProducto: async () => {
                try {
                    const response = await axios.get(direccion + "/api/productos", {});
                    setStore({
                        productos: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // obtener productos por Id
            obtenerProductoId: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/productos/" + id, {}
                    );
                    setStore({
                        producto: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Borrar productos */
            borrarProducto: async (id) => {
                try {
                    const response = await axios.delete(
                        direccion + "/api/productos/" + id, {}
                    );
                    console.log(response);
                    getActions().obtenerProducto();
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar productos
            modificarProducto: async (
                id,
                name,
                stock,
                sale_price,
                photo,
                purchase_price
            ) => {
                try {
                    const response = await axios.put(direccion + "/api/productos/" + id, {
                        id: id,
                        name: name,
                        stock: stock,
                        sale_price: sale_price,
                        photo: photo,
                        purchase_price: purchase_price,
                    });
                    //console.log(response.data);
                    getActions().obtenerProducto();
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //                 RUTINAS  					 //
            // ************************************************

            /* Crea nueva rutina*/
            crearRutina: async (user_id) => {
                try {
                    const response = await axios.post(direccion + "/api/rutinas", {
                        user_id: user_id,
                    });
                    console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
            },

            /* Ultimo id de rutina */
            obtenerUltimoId: async () => {
                try {
                    const response = await axios.get(direccion + "/api/rutina", {});
                    setStore({
                        rutina: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Listar rutinas */
            obtenerRutina: async () => {
                try {
                    const response = await axios.get(direccion + "/api/rutinas", {});
                    console.log(response.data);
                    setStore({
                        rutinas: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // obtener rutina por Id de usuario
            obtenerRutinaIdUsuario: async (id) => {
                try {
                    const response = await axios.get(direccion + "/api/rutina/" + id, {});
                    console.log(response.data);
                    setStore({
                        rutina: response.data,
                    });
                    // console.log(mens);
                } catch (error) {
                    console.log(error);
                }
            },

            // obtener rutina por Id
            obtenerRutinaId: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/rutinas/" + id, {}
                    );
                    console.log(response.data);
                    setStore({
                        rutinas: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Borrar rutinas */
            borrarRutina: async (id) => {
                try {
                    const response = await axios.delete(
                        direccion + "/api/rutinas/" + id, {}
                    );
                    console.log(response);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar rutinas
            modificarRutina: async (
                id,
                series,
                repetitions,
                burden,
                week,
                finish,
                user_id
            ) => {
                try {
                    const response = await axios.put(direccion + "/api/rutinas/" + id, {
                        id: id,
                        series: series,
                        repetitions: repetitions,
                        burden: burden,
                        week: week,
                        finish: finish,
                        user_id: user_id,
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
            //                 RUTINAS   					 //
            //             CON EJERCICIOS   		    	 //
            // ************************************************
            // obtener los ejercicios de la rutina por Id
            obtenerRutinaEjercicioId: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/rutinaEjercicio/" + id, {}
                    );
                    setStore({
                        rutinasEjercicios: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // obtener los ejercicios de la rutina por Id de usuario
            obtenerRutinaEjercicioIdUser: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/rutinaEjercicioId/" + id, {}
                    );
                    console.log(response.data);
                    setStore({
                        rutinasEjercicios: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Agregar ejercicios en rutina*/
            agregarEjerciciosenRutina: async (
                idRutina,
                idEjercicios,
                series,
                repeticiones,
                carga,
                semana,
                finaliza
            ) => {
                try {
                    const response = await axios.post(
                        direccion + "/api/rutinaEjercicio", {
                            idRutina: idRutina,
                            idEjercicios: idEjercicios,
                            series: series,
                            repeticiones: repeticiones,
                            carga: carga,
                            semana: semana,
                            finaliza: finaliza,
                        }
                    );
                    // console.log(response.data);
                    getActions().obtenerRutinaEjercicioId(idRutina);
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },

            // Borra ejercicios de la rutina
            borrarEjerciciosdeRutina: async (id) => {
                try {
                    const response = await axios.delete(
                        direccion + "/api/rutinaEjercicio/" + id, {}
                    );
                    // console.log(response);
                    getActions().obtenerRutinaEjercicioId(idRutina);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //                 CARRITO  					 //
            //                DE COMPRAS                     //
            // ************************************************
            /* Agrega productos al carrito */
            agregarProdCarrito: async (
                user_id,
                idCarrito,
                product_id,
                cantidad,
                precio
            ) => {
                try {
                    await axios.post(direccion + "/api/compras", {
                        user_id: user_id,
                        idCarrito: idCarrito,
                        product_id: product_id,
                        cantidad: cantidad,
                        precio: precio,
                    });
                } catch (error) {
                    console.log(error);
                }
            },

            //Mostrar todos los productos del carrito
            obtenerCarrito: async (idCarrito) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/compras/" + idCarrito, {}
                    );
                    console.log(response.data);
                    setStore({
                        carrito: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Borra productos del carrito
            borrarProductoCarrito: async (idCarrito, idProducto) => {
                try {
                    await axios.delete(
                        direccion + "/api/compra/" + idCarrito + "/" + idProducto, {}
                    );
                    getActions().obtenerCarrito(idCarrito);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            //Crea el id del Carrito (si dios me ayuda)
            crearIdCarrito: async (idUsuario) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/compra/" + idUsuario, {}
                    );
                    setStore({
                        idCarrito: response.data.idCarrito + 1,
                    });
                    return response.data.idCarrito + 1;
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modifica la cantidad de producto que se va a comprar
            modificarCantidad: async (idCarrito, idProducto, cantidad) => {
                try {
                    const response = await axios.put(
                        direccion + "/api/comprasCarrito/" + idCarrito + "/" + idProducto, {
                            cantidad: cantidad,
                        }
                    );
                    console.log(response.data);
                    getActions().obtenerCarrito(idCarrito);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // ************************************************
            //                 PENDIENTES					 //
            // ************************************************

            /* Crea nuevo Pendiente*/
            crearPendiente: async (id, state, amount, user_id, product_id) => {
                try {
                    const response = await axios.post(direccion + "/api/pendientes", {
                        id: id,
                        state: state,
                        amount: amount,
                        user_id: user_id,
                        product_id: product_id,
                    });
                    return true;
                } catch (error) {
                    console.log(error);
                }
            },

            /* Listar pendientes */
            obtenerPendiente: async () => {
                try {
                    const response = await axios.get(direccion + "/api/pendientes", {});
                    console.log(response.data);
                    setStore({
                        pendientes: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // obtener pendientes por Id de usuario
            obtenerPendientesIdUsuario: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/pendiente/" + id, {}
                    );
                    console.log(response.data);
                    setStore({
                        pendiente: response.data,
                    });
                    // console.log(mens);
                } catch (error) {
                    console.log(error);
                }
            },

            // obtener pendientes por Id
            obtenerPendienteId: async (id) => {
                try {
                    const response = await axios.get(
                        direccion + "/api/pendientes/" + id, {}
                    );
                    console.log(response.data);
                    setStore({
                        pendientes: response.data,
                    });
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            /* Borrar pendientes */
            borrarPendiente: async (id) => {
                try {
                    const response = await axios.delete(
                        direccion + "/api/pendientes/" + id, {}
                    );
                    console.log(response);
                } catch (error) {
                    console.log(error);
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg);
                    }
                }
            },

            // Modificar pendientes
            modificarPendiente: async (id, state, amount, user_id, product_id) => {
                try {
                    const response = await axios.put(
                        direccion + "/api/pendientes/" + id, {
                            id: id,
                            state: state,
                            amount: amount,
                            user_id: user_id,
                            product_id: product_id,
                        }
                    );
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
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
        },
    };
};

export default getState;