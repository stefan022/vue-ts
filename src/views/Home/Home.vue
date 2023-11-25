<script setup lang="ts">
    import { Title, Pagination } from "@/components";
    import { products } from "@/stores/products";
    import { computed, onMounted } from "vue";

    const productsStore = products();

    const productList = computed(() => productsStore.products);

    onMounted(async () => {
    	try {
    		await productsStore.getProducts();
			
    	} catch (error) {
    		console.error("Error fetching products:", error);
    	}
    });
</script>

<template>
    <Title title="Home Page" />
    <Pagination :productsArr="productList" :productsPerPage="10">
        <template v-slot="{ product }">
            <p>ID: {{ product.articleId }}</p>
            <p>{{ product.articleName }}</p>
        </template>
    </Pagination>
</template>

<style scoped lang="scss">
    @import "./Home.scss";
</style>
