import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search' spellCheck={false} />
                    <button className={cx('clear')} >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')} >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;