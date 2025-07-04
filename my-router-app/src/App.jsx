import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

// Dummy product data
const products = [
  { id: '1', name: 'Product A', desc: 'Description A' },
  { id: '2', name: 'Product B', desc: 'Description B' },
];

// Navbar component
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

// Home Page
function Home() {
  return <h2>Home Page</h2>;
}

// About Page
function About() {
  return <h2>About Page</h2>;
}

// Products List Page
function Products() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Product Detail Page
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <button onClick={() => navigate('/products')}>Back to Products</button>
    </div>
  );
}

// 404 Not Found Page
function NotFound() {
  return <h2>404 Not Found</h2>;
}

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
