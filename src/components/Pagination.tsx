import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const numbers = Array.from(Array(10), (_, index) => index + 1);

  return (
    <div className="flex m-5 items-center justify-center gap-4 mb-8 w-full bg-white">
      <button
        className="text-violet-800 font-semibold"
        disabled={currentPage === 0}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {`← Prev`}
      </button>
      {numbers?.map((item, index) => {
        return (
          <p
            className={`w-7 h-7 ${
              currentPage === index
                ? "bg-violet-800 text-violet-100 font-semibold"
                : "text-violet-800"
            } rounded-md flex items-center justify-center cursor-pointer`}
            onClick={() => setCurrentPage(index)}
          >
            {item}
          </p>
        );
      })}
      <button
        className="text-violet-800 font-semibold"
        onClick={() => setCurrentPage(currentPage + 1)}
      >{`Next →`}</button>
    </div>
  );
};
