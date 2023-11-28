import PrivateLayout from "@/layouts/private/PrivateLayout.vue";
import PublicLayout from "@/layouts/public/PublicLayout.vue";

import { Home, About, NotFound, NotAuthorized } from "@/views";
import { AppRoutes } from "./AppRoutes";
import { AdminLayout } from "@/layouts";

export const routes =  [
    {
        path: "/",
        component: PrivateLayout,
        children: [
            {
                path: AppRoutes.HOME.path,
                name: AppRoutes.HOME.name,
                component: Home,
            },
            {
                path: AppRoutes.ABOUT.path,
                name: AppRoutes.ABOUT.name,
                component: About,
            },
            {
                path: AppRoutes.PRODUCTS.path,
                name: AppRoutes.PRODUCTS.name,
                component: () => import("@/views/Products/Products.vue"),
            },
            {
                path: AppRoutes.SINGLE_PRODUCT.path,
                name: AppRoutes.SINGLE_PRODUCT.name,
                component: () => import("@/views/Products/SingleProduct/SingleProduct.vue"),
            },
            {
                path: AppRoutes.DASHBOARD.path,
                name: AppRoutes.DASHBOARD.name,
                component: () => import("@/views/Dashboard/Dashboard.vue")
            }
        ],
    },
    {
        path: "/",
        component: PublicLayout,
        children: [
            {
                path: AppRoutes.LOGIN.path,
                name: AppRoutes.LOGIN.name,
                component: () => import("@/views/Login/Login.vue"),
            },
            {
                path: AppRoutes.REGISTER.path,
                name: AppRoutes.REGISTER.name,
                component: () => import("@/views/Register/Register.vue")
            }
        ]
    },
    {
        path: "/",
        component: AdminLayout,
        children: [
            {
                path: AppRoutes.DASHBOARD.path,
                name: AppRoutes.DASHBOARD.name,
                component: () => import("@/views/Dashboard/Dashboard.vue")
            }
        ]
    },
    {
        path: AppRoutes.NOT_AUTHORIZED.path,
        name: AppRoutes.NOT_AUTHORIZED.name,
        component: NotAuthorized  
    },
    {
        path: AppRoutes.NOT_FOUND.path,
        name: AppRoutes.NOT_FOUND.name,
        component: NotFound
    },
];