<script setup lang="ts">
    import { AppRoutes } from "@/router/AppRoutes";
	import { context } from "@/stores/context/context";
	import { products } from "@/stores/products";
    import { ref, onMounted, computed } from "vue";
	import { RouterLink } from "vue-router";
    
    const productsStore = products();
	const contextStore = context();
    
    const loading = ref<boolean>(true);
	const productList = computed(() => productsStore.products);
	const visibleProduct = computed(() => contextStore.visibleProduct);

    onMounted(async () => {
    	try {
    		await productsStore.getProducts();
    		loading.value = false;
			
    	} catch (error) {
    		console.error("Error fetching products:", error);
    		loading.value = false;
    	}
    });

	const handleLoadMore = () => { 
		contextStore.updateVisibleProduct();
	};
</script>

<template>
	<div>
		<h2>Products:</h2>
		<ul v-if="productList.length > 0">
			<li v-for="{ articleId, articleName } in productList.slice(0, visibleProduct)" :key="articleId">
				{{ articleName }}
				<RouterLink :to="`${AppRoutes.PRODUCTS.path}/${articleId}`">View more</RouterLink>
			</li>
			<button class="dg-btn" @click="handleLoadMore">Load more</button>
		</ul>
		<p v-else-if="loading">Loading...</p>
		<p v-else>No users available</p>
	</div>
</template>