export function Pagination({
  currentPage,
  nextButtonIsDisabled,
  onPageChange,
}: {
  currentPage: number;
  nextButtonIsDisabled: boolean;
  onPageChange: (value: number) => void;
}) {
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      <button
        className="flex items-center px-4 py-2 hover:underline hover:text-blue-10 disabled:text-grey-10 disabled:pointer-events-none"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Previous Page
      </button>
      <p className="mr-4">Page {currentPage}</p>

      <button
        className="flex items-center px-4 py-2 hover:underline hover:text-blue-10 disabled:text-grey-10 disabled:pointer-events-none"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={nextButtonIsDisabled}
      >
        Next Page &gt;
      </button>
    </div>
  );
}
