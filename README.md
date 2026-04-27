# 🚀 Cotizador de Criptomonedas

Este proyecto es una aplicación web interactiva que permite a los usuarios consultar el precio actual de diversas criptomonedas (como Bitcoin, Ethereum, AXS y BNB) en diferentes monedas locales (Dólar, Euro, Pesos Argentinos y Bolívares). Además, incluye una función de cálculo para saber exactamente cuánto puedes comprar con un monto específico.

![Tecnologías](https://img.shields.io/badge/Tecnologías-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)

## ✨ Características

- **Consulta en vivo:** Conexión directa con la API de [CryptoCompare](https://min-api.cryptocompare.com/) para obtener datos reales.
- **Cálculo de compra:** Permite ingresar un monto en moneda local y calcula la fracción de criptomoneda equivalente.
- **Responsive Design:** Adaptado para dispositivos móviles, ocultando elementos decorativos en pantallas pequeñas para mejorar la usabilidad.
- **Feedback visual:** Incluye un *loader* animado mediante CSS mientras se procesa la petición a la API.

## 🛠️ Stack Tecnológico

- **HTML5:** Estructura semántica del cotizador.
- **CSS3:** - Flexbox y CSS Grid para el layout.
  - Gradientes radiales y sombras para profundidad.
  - Animaciones personalizadas con `@keyframes` (efecto de rotación y clip-path para el loader).
  - Media Queries para adaptabilidad móvil.
- **JavaScript (ES6+):**
  - **Asincronía:** Uso de `async/await` para manejar las promesas de la API.
  - **Fetch API:** Intermediario para la comunicación entre el software y el servidor externo.
  - **Manipulación del DOM:** Actualización dinámica de los resultados y clases de animación (`.show`).

Desarrollado con ❤️ por Mariangel Martinez.