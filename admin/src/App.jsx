import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/order/Order";
import {
  useAddFurniture,
  useGetFurniture,
  useRemoveFurniture,
} from "./adminApi/furnitureApi";

const App = () => {
  const { addProduct, isLoading } = useAddFurniture();
  const { products, refetch } = useGetFurniture();
  const { removeProduct } = useRemoveFurniture();
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route
            path="/add"
            element={
              <Add
                onSave={addProduct}
                isLoading={isLoading}
                refetch={refetch}
              />
            }
          />
          <Route
            path="/list"
            element={
              <List
                data={products}
                removeProduct={removeProduct}
                refetch={refetch}
              />
            }
          />
          <Route path="/list" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
