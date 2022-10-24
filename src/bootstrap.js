import React from "react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes, Router } from "react-router-dom"

import "./index.css"
import App from "./App"

const root = createRoot(document.querySelector("#root"))
root.render(<App />)
