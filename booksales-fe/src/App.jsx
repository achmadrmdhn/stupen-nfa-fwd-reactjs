import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import AdminBooks from "./pages/admin/books";
import BooksCreate from "./pages/admin/books/create";
import Dashboard from "./pages/admin";
import AdminGenres from "./pages/admin/genres";
import GenresCreate from "./pages/admin/genres/create";
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import BookEdit from "./pages/admin/books/edit";
import ShowBook from "./pages/public/books/show";
import GenreEdit from "./pages/admin/genres/edit";
import AuthorEdit from "./pages/admin/authors/edit";
import ProtectedRoute from "./components/shared/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public (Akses bebas) */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books">
              <Route index element={<Books />} />
              <Route path="show/:id" element={<ShowBook /> } />
            </Route>
          </Route>

          {/* Auth  */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* Admin Routes - DIBUNGKUS OLEH ProtectedRoute */}
          {/* Hanya role 'admin' yang bisa mengakses rute anak di dalamnya */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            {/* AdminLayout kini hanya bertanggung jawab pada tampilan */}
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />

              {/* Rute CRUD Admin */}
              <Route path="books">
                <Route index element={<AdminBooks />} />
                <Route path="create" element={<BooksCreate />} />
                <Route path="edit/:id" element={<BookEdit />} />
              </Route>
              <Route path="genres">
                <Route index element={<AdminGenres />} />
                <Route path="create" element={<GenresCreate />} />
                <Route path="edit/:id" element={<GenreEdit />} />
              </Route>
              <Route path="authors">
                <Route index element={<AdminAuthors />} />
                <Route path="create" element={<AuthorCreate />} />
                <Route path="edit/:id" element={<AuthorEdit />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;