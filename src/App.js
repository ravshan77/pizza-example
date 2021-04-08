import "./App.css";
import Main from "./pages/Main/main";
import Header from "./components/header/header";

import { Route, Switch } from "react-router-dom";
// import Footer from "./components/footer/footer";
import Store from "./pages/Store/store";
import Product from "./pages/Product/product";

import { CardData } from "./service/Api";
import Filtered from "./pages/filtered/filtered";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Main card={CardData} />} />
        <Route
          path="/product/:id"
          render={(props) => {
            return <Product {...props} />;
          }}
        />
        <Route
          path="/filtered/:id"
          render={(props) => {
            return <Filtered {...props} />;
          }}
        />
        <Route path="/store" component={Store} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
