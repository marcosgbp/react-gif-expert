import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function BtnClear({onClearSearch}) {
    const onBtnClear = () => {
        onClearSearch();
    }
  return (
    <div>
        <button 
          title="Limpia las busquedas"
          className="btn btn-warning"
          type="button" 
          onClick={onBtnClear}><FontAwesomeIcon icon={faBroom} /></button>
    </div>
  )
}
