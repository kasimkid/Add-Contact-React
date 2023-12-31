const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      contact: "",
      cargando: false,
    },
    actions: {
      // Use getActions to call a function within a fuction

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      // ver contactos de agenda en API
      obtenerAgenda: async () => {
        const url =
          "https://playground.4geeks.com/apis/fake/contact/agenda/rafael-araujo";
        const resp = await fetch(url);
        const data = await resp.json();
        setStore({ contacts: data });
      },

      //Crear Contacto en API
      crearContacto: async (datosContacto) => {
        datosContacto.agenda_slug = "rafael-araujo";
        const url = "https://playground.4geeks.com/apis/fake/contact/";
        const request = {
          method: "POST",
          body: JSON.stringify(datosContacto),
          headers: {
            "Content-Type": "application/json",
          },
        };

        try {
          const resp = await fetch(url, request);
          const data = await resp.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },

      //Editar Contacto en API
      editarContacto: async (id, datosContacto) => {
        datosContacto.agenda_slug = "rafael-araujo";
        const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        const request = {
          method: "PUT",
          body: JSON.stringify(datosContacto),
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(url, request);
          const data = await resp.json();
          console.log(data)
        } catch (error) {
          console.log(error);
        }
      },

      detailContact: async (id) => {
        setStore({ cargando: true });
        try {
          const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
          const resp = await fetch(url);
          const data = await resp.json();
          setStore({ contact: data[0] });
          setStore({ cargando: false });
        } catch (error) {
          console.log(error);
        }
      },
      deleteContact: async (id) => {
        const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
        const request = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(url, request);
          const data = await resp.json();
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
