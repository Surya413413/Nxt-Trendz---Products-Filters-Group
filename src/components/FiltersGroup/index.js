import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeCategory,
    onChangeRating,
    clearFilter,
    searchInput,
    onChangeSearch,
    resultSearch,
  } = props

  const onInputSearch = event => {
    if (event.key === 'Enter') {
      resultSearch()
    }
  }

  const onChnageSearchInput = event => {
    onChangeSearch(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          onChange={onChnageSearchInput}
          value={searchInput}
          onKeyDown={onInputSearch}
        />
        <BsSearch className="search-icon" />
      </div>

      <h1 className="category-heading">Category</h1>
      <ul className="unorder-category-list">
        {categoryOptions.map(each => (
          <li className="list-items-container" key={each.categoryId}>
            <button
              className="button-catagiro"
              type="button"
              onClick={() => onChangeCategory(each.categoryId)}
            >
              <p>{each.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1 className="Rating-heading">Rating</h1>
      <ul className="unorder-category-list">
        {ratingsList.map(each => (
          <li className="list-items-container" key={each.ratingId}>
            <button
              className="button-catagiro"
              type="button"
              onClick={() => onChangeRating(each.ratingId)}
            >
              <img
                className="rate-img"
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
              />
              <span className="name-up">& up</span>
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className="button-clear" onClick={clearFilter}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
