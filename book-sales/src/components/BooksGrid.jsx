export default function BooksGrid({ items = [] }) {
  const fmt = (n) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);

  const shorten = (text = "", max = 120) =>
    text.length > max ? text.slice(0, max).trim() + "…" : text;

  return (
    <div className="album py-4 bg-body-tertiary rounded">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {items.map((b) => (
            <div className="col" key={b.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={b.img}
                  alt={b.title}
                  className="card-img-top"
                  style={{ height: 220, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-1">{b.title}</h5>
                  <p className="text-body-secondary mb-1">
                    oleh {b.author} • {b.year}
                  </p>

                  {b.description && (
                    <p className="text-body-secondary small mb-2">
                      {shorten(b.description, 130)}
                    </p>
                  )}

                  <p className="fw-semibold mb-3">{fmt(b.price)}</p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Detail
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        disabled={!b.inStock}
                        title={b.inStock ? "Tambah ke Cart" : "Stok habis"}
                      >
                        {b.inStock ? "Tambah ke Cart" : "Habis"}
                      </button>
                    </div>
                    <small className={`text-${b.inStock ? "success" : "danger"}`}>
                      <i className="fa-solid fa-truck-fast me-1"></i>
                      {b.inStock ? "Ready" : "Out"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="col">
              <div className="alert alert-warning mb-0">Belum ada data buku.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
