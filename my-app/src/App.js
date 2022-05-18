import React from "react";
import ValidatedForm from "./components/ValidatedForm/ValidatedForm";
import styles from "./components/ValidatedForm/style.css";
import style from "./components/Popup/style.css";
const regexp = /^admin$/;
export default function App() {
  return <ValidatedForm validation={regexp} />;
}
