export default function GifItem({title, url}) {
  return (
    <div className='card'>
        <p>{title}</p>
        <img src={url.url} alt={title} />
    </div>
  )
}
