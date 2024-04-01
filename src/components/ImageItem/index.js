import './index.css'

const ImageItem = props => {
  const {imgDetails, clickedImg} = props
  const {id, imageUrl, thumbnailUrl} = imgDetails
  const onSelectedImg = () => {
    clickedImg(imageUrl)
  }
  return (
    <>
      <li className="img-item">
        <button type="button" className="btn-as-img" onClick={onSelectedImg}>
          <img className="image" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    </>
  )
}

export default ImageItem
