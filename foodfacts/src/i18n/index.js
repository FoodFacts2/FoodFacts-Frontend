import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        loginTitle: "Iniciar Sesión",
        registerTitle: "Registrarse",
        heroTitle: 'Bienvenido a FoodFacts',
        heroSubtitle: 'Analice los datos nutricionales de los alimentos procesados y tome decisiones informadas sobre su salud',
    },
};

const i18n = createI18n({
    locale: 'en',
    messages,
});

export default i18n;