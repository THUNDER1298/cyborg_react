import './buttons.css'

const Primarybutton = (props) => {
  return (
    <div className='button primary-btn'>
        <a href='/#'>{props.children}</a>
    </div>
  )
}
const Secondarybutton = (props) => {
    return (
      <div className='button secondary-btn'>
        <a href='/#'>{props.children}</a>
      </div>
    )
  }
  
  
export default Primarybutton
export {Secondarybutton}