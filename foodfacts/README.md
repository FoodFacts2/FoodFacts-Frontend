### FoodFacts - Nutritional Analysis Platform
---
## Autores

- [Carlos Sanchez](https://github.com/carlossm907) (U202015274)
- [Irving Allcca](https://github.com/Evitern07) (U202213241)
- [Kevin Dextre](https://github.com/KevinDextreMiguel) (U20211c027)
- [Michael Quispe](https://github.com/MQRF123) (U20221E734)
- [Sebastian Ramos](https://github.com/DazzliBoy) (U202222846)

#### Overview

**FoodFacts** is a web application designed to provide detailed nutritional analysis of processed and industrially produced foods. The platform collects and processes data from product labels, nutritional databases, and scientific studies to offer users comprehensive insights into the nutritional content of various foods.

#### Features

- **Nutritional Information:** View detailed nutritional information for processed foods.
- **Health Risk Identification:** Identify potential health risks associated with certain foods.
- **Custom Reports:** Generate personalized reports on food safety and nutritional value.
- **Search and Filter:** Search for products by name or category and filter results based on nutritional values.
- **User Profiles:** Create and manage user profiles with personalized settings and alerts.
- **Responsive Design:** Access the platform from any device, including mobile, tablet, and desktop.

#### Technologies Used

- **Vue 3:** Frontend framework for building the user interface.
- **Vite:** Build tool for fast development and optimized production builds.
- **PrimeVue:** UI component library based on Material Design.
- **PrimeFlex:** Utility library for CSS styling.
- **PrimeIcons:** Icon library for UI components.
- **Vue Router:** Routing library for managing navigation within the application.
- **Vue i18n:** Internationalization library for multi-language support.
- **Axios:** HTTP client for making API requests.

#### Project Structure

The project is organized following a Domain-Driven Design (DDD) approach, with the following structure:

```
/src
├── /public
│   ├── /assets
│   │   └── manzana.png
├── /shared
│   ├── /components
│   │   ├── header.component.vue
│   │   └── footer.component.vue
│   ├── /services
│   │   ├── api.service.js
│   │   └── auth.service.js
│   ├── /model
│   │   ├── user.model.js
│   │   └── product.model.js
├── /public
│   ├── /pages
│   │   ├── home.page.vue
│   │   ├── login.page.vue
│   │   └── register.page.vue
│   ├── /components
│   │   ├── hero-section.component.vue
│   │   ├── feature-section.component.vue
│   │   └── testimonial-section.component.vue
│   ├── /services
│   │   └── contact.service.js
├── /user
│   ├── /pages
│   │   ├── dashboard.page.vue
│   │   ├── profile.page.vue
│   │   └── settings.page.vue
│   ├── /components
│   │   ├── product-list.component.vue
│   │   ├── alert-settings.component.vue
│   │   └── favorite-products.component.vue
│   ├── /services
│   │   ├── product.service.js
│   │   └── user.service.js
├── /router
│   └── index.js
├── /i18n
│   └── index.js
├── main.js
└── App.vue
```

#### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/foodfacts.git
   cd foodfacts
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

#### Usage

1. **Access the application:**
   Open your browser and navigate to `http://localhost:5173`.

2. **Register or Login:**
   Create a new account or log in with existing credentials to access personalized features.

3. **Explore Nutritional Information:**
   Search for products by name or category and view detailed nutritional information.

4. **Generate Custom Reports:**
   Create and download personalized reports on food safety and nutritional value.

#### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

#### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

#### Contact

For any questions or feedback, please contact us at [contact@foodfacts.com](mailto:contact@foodfacts.com).

---

**FoodFacts** - Making informed decisions about your health, one bite at a time.