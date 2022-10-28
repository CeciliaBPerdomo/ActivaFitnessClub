import axios from "axios";
//import json;

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
        },
        actions: {
            // ************************************************
            // 					ALUMNOS						 //
            // ************************************************
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
                is_active
            ) => {
                try {
                    const response = await fetch(
                        "https://3001-ceciliabper-activafitne-41h62uazymi.ws-us72.gitpod.io/api/user", {
                            method: "POST",
                            body: JSON.stringify({
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
                            }),
                            headers: {
                                "Content-type": "application/json",
                            },
                        }
                    );
                    if (response.status === 200) {
                        const data = await response.json();
                        console.log(data);
                    }
                    return true;
                } catch (error) {
                    console.log(error);
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
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;