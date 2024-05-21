import './index.css'

const SearchItem = props => {
  const {historyItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onChange = () => {
    onDelete(id)
  }

  return (
    <li className='list-item-container'>
      <p>{timeAccessed}</p>
      <div className='card-container'>
        <div className='img-head-con'>
          <img src={logoUrl} className='logo-img' alt='domain logo' />
          <div className='head-container'>
            <p className='head'>{title}</p>
            <p className='url'>{domainUrl}</p>
          </div>
        </div>
        <button data-testid='delete' type='button' onClick={onChange}>
          <img
            src='https://assets.ccbp.in/frontend/react-js/delete-img.png'
            className='dlte-logo'
            alt='delete'
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
