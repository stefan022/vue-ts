<script setup lang="ts">
	import { ref, computed } from "vue";

	const props = defineProps(["productsArr", "productsPerPage"]);
	const currentPage = ref<number>(1);

	const paginatedProducts = computed(() => {
		const start = (currentPage.value - 1) * props.productsPerPage;
		const end = start + props.productsPerPage;

		return props.productsArr.slice(start, end);
	});

	const pageCount = computed(() =>
		Math.ceil(props.productsArr.length / props.productsPerPage)
	);

	const prevPage = () => {
		if (currentPage.value > 1) {
			currentPage.value--;
		}
	};

	const nextPage = () => {
		if (currentPage.value < pageCount.value) {
			currentPage.value++;
		}
	};

	const setPage = (page: number) => {
		currentPage.value = page;
	};
</script>

<template>
	<div>
		<div class="products">
			<div v-for="product in paginatedProducts" :key="product.articleId">
        		<slot :product="product"></slot>
      		</div>
		</div>

		<div class="pagination">
			<button @click="prevPage" :disabled="currentPage === 1">Previous</button>
			<button
				v-for="page in pageCount"
				:key="page"
				@click="setPage(page)"
				:class="{ active: currentPage === page }"
			>
				{{ page }}
			</button>
			<button @click="nextPage" :disabled="currentPage === pageCount">
				Next
			</button>
		</div>
	</div>
</template>



<style scoped lang="scss">
    @import "./Pagination.scss";
</style>
