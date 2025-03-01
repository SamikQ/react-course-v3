const PaginationContainer = () => {
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button className="btn btn-xs sm:btn-md join-item">Prev</button>
        <button className="btn btn-xs sm:btn-md join-item">Next</button>
      </div>
    </div>
  );
};
export default PaginationContainer;
