import { defineStore } from "pinia";

import type { IProduct } from "@/ts/interfaces/IProduct";
import type { AddSingleProductDTO } from '../ts/dtos/AddSingleProductDTO';

import { httpAddSingleProduct, httpUpdateSingleProduct, httpDeleteSingleProduct, httpGetProducts, httpGetSingleProduct } from "@/services/products.service";

export const products = defineStore("products", {
    state: () => ({
        products: [] as IProduct[],
        singleProduct: null as IProduct | null
    }),

    actions: {
        async getProducts() {
            const response = await httpGetProducts();
            this.products = response.data;
        },
        
        async getSingleProduct(id: number) {
            const response = await httpGetSingleProduct(id);
            this.singleProduct = response.data;
        },
        
        async addSingleProduct(dto: AddSingleProductDTO) {
            const response = await httpAddSingleProduct(dto);
        
            this.products.push(response.data);
        },

        async updateSingleProduct(dto: IProduct) {
            const { articleId } = dto;

            await httpUpdateSingleProduct(articleId, dto);

            return this.getProducts();
        },

        async deleteSingleProduct(id: number) {
            await httpDeleteSingleProduct(id);

            return this.getProducts();
        }
    }
});


