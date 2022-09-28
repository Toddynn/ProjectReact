import './title.css';
import Profile from '../../pages/Profile';


export default function Title({children, name}){
    return(
        <div className='title'>
            {children}
            <span>{name}</span>
        </div>
    )
}