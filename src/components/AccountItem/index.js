import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

function AccountItem() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e61b6bf58250f752221ef28672a33333~c5_100x100.jpeg?x-expires=1675760400&x-signature=GJdjuNnRevj9agMaJSX1gbMfCpw%3D"
                alt="img"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Lê Quốc Phi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>lequocphi</span>
            </div>
        </div>
    );
}

export default AccountItem;
