export const AppRoutes = {
    HOME: {
        path: "/",
        name: "home"
    },
    ABOUT: {
        path: "/about",
        name: "about"
    },
    PRODUCTS: {
        path: "/products",
        name: "products"
    },
    SINGLE_PRODUCT: {
        path: "/products/:id",
        name: "single-product"
    },
    LOGIN: {
        path: "/login",
        name: "login"
    },
    REGISTER: {
        path: "/register",
        name: "register"
    },
    FORGOT_PASSWORD: {
        path: "/forgot-password",
        name: "/forgot-password"
    },
    DASHBOARD: {
        path: "/dashboard",
        name: "/dashboard"
    },
    NOT_FOUND: {
        path: "/:pathName(.*)",
        name: "not-found"
    },
    NOT_AUTHORIZED: {
        path: "/not-authorized",
        name: "not-authorized"
    }
}