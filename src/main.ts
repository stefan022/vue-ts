import "./scss/main.scss";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";

import App from "./App.vue";
import router from "./router";
import firebaseApp from "./firebase/config";

const app = createApp(App);

app.use(router)
app.use(createPinia())

app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
});

app.mount("#app");