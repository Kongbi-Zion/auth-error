import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
  
awsconfig.oauth["redirectSignIn"] = `${window.location.origin}/auth/`;
awsconfig.oauth["redirectSignOut"] = `${window.location.origin}/`;
export default defineNuxtPlugin(async (nuxtApp) => {
    if(process.client) {
        window.global = window;
        var exports = {};
    }
    
    Amplify.configure({
        ...awsconfig,
        ssr: true
    });
    
    nuxtApp.vueApp.use(Amplify);
});
  