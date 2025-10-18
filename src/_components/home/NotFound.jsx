const NotFound = ({ isFindTheCity }) => {
  return (
    <div className="notfound">
      {isFindTheCity === true ? (
        <h2>No search result found!</h2>
      ) : (
        <h2>🌤️ Welcome to the Weather App!</h2>
      )}
    </div>
  );
};

export default NotFound;
