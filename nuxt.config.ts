// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //关闭ssr
  // ssr: false,
  //开启开发者工具
  devtools: { enabled: true },
  modules: [
    '@vant/nuxt',
    'nuxt-mongodb'
  ],
})
