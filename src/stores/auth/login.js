import { defineStore } from "pinia";
import { reactive } from "vue";
import { useStorage } from "@vueuse/core";
import { LoginService } from "@/services";
import router from "@/router";

export const useLoginStore = defineStore("login", () => {
    const state = reactive({
        user: useStorage("login_user", null, undefined, {
            serializer: {
                read: (v) => v ? JSON.parse(v) : null,
                write: (v) => JSON.stringify(v)
            }
        }),
        token: useStorage("login_token", null)
    });

    async function loginUser(data) {
        try {
            const response = await LoginService.LoginUser(data);
            console.log("Login response:", response);
            state.user = {
                email: data.email,
                username: response.username,
                userId: response.userId
            };
            state.token = response.token;

            if (state.token) {
                router.push("/dashboard");
            }
            return response;
        } catch (error) {
            console.error("Error in auth store while logging in user:", error);
        }
    }

    return{
        state,
        loginUser
    }
})