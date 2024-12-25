import "./Pagination.scss";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalItems, changePage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Har bir sahifada 50 ta element
  const itemsPerPage = 50;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Hozirgi sahifa (query'dan olingan yoki 1)
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Sahifani yangilash funksiyasi
  const handlePage = (page) => {
    changePage(page);
    if (page < 1 || page > totalPages) return; // Yaroqsiz sahifa
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  // Pagination raqamlarini hosil qilish
  const getPaginationNumbers = () => {
    const pagination = [];
    if (totalPages <= 5) {
      // Agar umumiy sahifalar soni 5 yoki undan kam bo'lsa, hammasini chiqaramiz
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(i);
      }
    } else {
      // Boshidan 2 ta raqam
      pagination.push(1, 2);

      // O'rtada "..." yoki o'rtadagi raqamlar
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pagination.push("...", currentPage, "...");
      } else if (currentPage <= 3) {
        pagination.push(3, "...");
      } else {
        pagination.push("...", totalPages - 2);
      }

      // Oxiridan 2 ta raqam
      pagination.push(totalPages - 1, totalPages);
    }
    return pagination;
  };

  const paginationNumbers = getPaginationNumbers();

  return (
    <div
      className="pagination"
      style={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      {/* Chap arrow */}
      {currentPage > 1 && (
        <button
          className="pagination__arrows"
          onClick={() => handlePage(currentPage - 1)}
        >
          <img src="/images/left.png" alt="left" />
        </button>
      )}

      {/* Sahifa raqamlari */}
      {paginationNumbers.map((item, index) => (
        <button
          key={index}
          className={currentPage === item ? "active" : item=== "..." ? "tran":""}
          onClick={() => typeof item === "number" && handlePage(item)}
          disabled={item === "..."}
          style={{
            cursor: item === "..." ? "default" : "pointer",
          }}
        >
          <span>{item+""}</span>
        </button>
      ))}

      {/* O‘ng arrow */}
      {currentPage < totalPages && (
        <button
          className="pagination__arrows"
          onClick={() => handlePage(currentPage + 1)}
        >
          <img src="/images/right.png" alt="right" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
