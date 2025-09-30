import { initialBooks } from "../utils/Books";
import BooksGrid from "./BooksGrid";
import { NavLink } from "react-router-dom";

export default function BookList() {
  const homeBooks = initialBooks.slice(0, 6); // tampilkan 6 buku di Home

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Katalog Buku</h2>
        <p className="text-body-secondary">
          Telusuri kategori populer dan temukan bacaan yang kamu butuhkan—dari fiksi epik hingga buku referensi kuliah.
        </p>
        <NavLink to="/book" className="btn btn-outline-primary btn-sm">Lihat semua</NavLink>
      </div>

      <BooksGrid items={homeBooks} />
    </div>
  );
}
