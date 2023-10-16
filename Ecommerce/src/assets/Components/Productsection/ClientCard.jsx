
import PropTypes from 'prop-types';

const ClientCard = ({classname, alt, src}) => {
  return (
    <div className='classname'>
     <img className={classname + '-icon'} alt={alt} src={src} />
    </div>
  )
}


ClientCard.PropTypes={
    classname: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,

};


export default ClientCard
