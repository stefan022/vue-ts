import { initToastInfo } from "@/constants/initToastInfo";
import type { IToastInfo } from "@/ts/interfaces/IToastInfo";
import { defineStore } from "pinia";

export const context = defineStore("context", {
    state: () => ({
        toastInfo: initToastInfo as IToastInfo,
        visibleProduct: 5 as number,
    }),

    actions: {
        updateVisibleProduct () {
            this.visibleProduct += 5
        }
    }
});