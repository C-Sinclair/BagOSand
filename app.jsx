import * as React from "react"
import { render } from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/index.mdx"
import Products from "./products"

function App() {
  return (
    <HashRouter>
      <h1>A test </h1>
      <Switch>
        {Object.entries(Products).map(([path, component]) => (
          <Route path={path} exact component={component} />
        ))}
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

render(<App />, document.getElementById("root"))
