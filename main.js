import "./style.css";
import { jsxtraInit } from "jsxtra";
import App from "./pages/App";

jsxtraInit({
	appContainer: document.querySelector('#app'),
	baseComponent: App
})
