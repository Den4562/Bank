import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ExchangerRate from "./pages/ExchangerRate";
import Product from "./components/Product";
import Customers from "./pages/Customers";
import { AppProvider } from "./utils/context";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="exchange-rate" element={<ExchangerRate />} />
            <Route path="product" element={<Product />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
