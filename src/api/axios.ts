// import axios from "axios";

// const API =
//   axios.create({

//     baseURL:
//       "https://ai-support-crm.onrender.com/api",

// });



// /* =========================
//    REQUEST INTERCEPTOR
// ========================= */

// API.interceptors.request.use(

//   (config) => {

//     const token =
//       localStorage.getItem(
//         "token"
//       );


//     console.log(
//       "TOKEN:",
//       token
//     );


//     if (token) {

//       config.headers.Authorization =
//         `Bearer ${token}`;

//     }


//     return config;

//   },

//   (error) => {

//     return Promise.reject(
//       error
//     );

//   }

// );


// export default API;

import axios from "axios";

const API = axios.create({

  baseURL:
    "https://ai-support-crm.onrender.com/api",

});


/* =========================
   REQUEST INTERCEPTOR
========================= */

API.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem(
        "token"
      );

    // ADD TOKEN

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;

  },

  (error) => {

    return Promise.reject(
      error
    );

  }

);

export default API;