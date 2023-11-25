<script setup lang="ts">
    import { AppRoutes } from "@/router/AppRoutes";
    import { ref, onMounted } from "vue";
    import { useRoute, RouterLink } from "vue-router";
    import { products } from "@/stores/products";
    import type { IProduct } from "@/ts/interfaces/IProduct";

    const route = useRoute();
    const productID = parseInt(route.params.id as string);

    const productsStore = products();
    const singleProduct = ref<null | IProduct>(productsStore.singleProduct);

    onMounted(async () => {
    	try {
    		await productsStore.getSingleProduct(productID);
    		singleProduct.value = productsStore.singleProduct;
    	} catch (error) {
    		console.error("Error fetching single product:", error);
    	}
    });
</script>

<template>
	<div v-if="singleProduct">
        <h3>Product Info:</h3>
        <ul>
		    <li>ID: {{ singleProduct.articleId }}</li>
		    <li>Name: {{ singleProduct.articleName }}</li>
		    <li>Category: {{ singleProduct.category }}</li>
		    <li>Brand: {{ singleProduct.brand }}</li>
		    <li>Price: ${{ singleProduct.price }}</li>
            <li>Discount: {{ singleProduct.discount }}%</li>
        </ul>
        <RouterLink :to="AppRoutes.PRODUCTS.path">Back &larr;</RouterLink>
	</div>
</template>
@/stores/phones