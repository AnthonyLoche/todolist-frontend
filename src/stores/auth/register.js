import { defineStore } from "pinia";
import { reactive } from "vue";
import { RegisterService } from "@/services";

export const useRegisterStore = defineStore("register", () => {
    const state = reactive({
        user: null,
        token: null
    });

    async function registerUser(data) {
        try {
            const response = await RegisterService.RegisterUser(data);
            return response;
        } catch (error) {
            console.error("Error in auth store while registering user:", error);
        }
    }

    return{
        state,
        registerUser
    }
})