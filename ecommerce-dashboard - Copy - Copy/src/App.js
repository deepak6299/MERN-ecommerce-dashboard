import "./App.css";
import CustomerView from "./CustomerView";
import AdminDashboard from "./AdminDashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddList from "./components/AddList";
import { ProductProvider } from "./store/productItemsStore";
import EditProduct from "./components/EditProduct";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  const auth = localStorage.getItem("users");

  const handleLogout = () => {
    localStorage.clear();

  };
  return (
    <ProductProvider>
      <BrowserRouter>
        <header>
          <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                <svg className="bi me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-4">E-Commerce Dashboard</span>
              </a>
              {
              auth?
              
              

              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Customer View
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    Admin Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                    <Link
                      to="/signin"
                      className="nav-link"
                      onClick={handleLogout}
                    >
                   {(JSON.parse(auth).name)} Logout
                    </Link>
                  </li>
                </ul>:
                <ul className="nav nav-pills">
                  <li className="nav-item">
                      <Link to="/signin" className="nav-link">
                        SignIn
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                    </li>

                </ul>
              }

               
              
            </header>
          </div>
        </header>

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<CustomerView />}></Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
            <Route path="/addList" element={<AddList />}></Route>
            <Route path="/edit" element={<EditProduct />}></Route>
            
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
