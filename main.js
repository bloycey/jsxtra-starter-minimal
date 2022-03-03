import "./style.css";
import { jsxtraInit } from "jsxtra";
import App from "./App";

jsxtraInit({
	appContainer: document.querySelector('#app'),
	baseComponent: App
})
