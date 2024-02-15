import { FC } from 'react';
import cx from 'classnames';

import classes from './navbar-toggler.module.scss';
import { classNames } from '@/shared/types/types';

interface Props {
  className?: classNames;
  color?: string;
  onClick?: () => void;
  active: boolean;
}

const NavbarToggler: FC<Props> = ({
  className,
  color = '#979797',
  onClick,
  active = false,
}) => {
  const classNames = cx(`${classes['navbar-toggler']}`, {
    [className]: className,
    [classes.opened]: active,
  });

  return (
    <button className={classNames} onClick={onClick} style={{ color: color }}>
      <div className={classes['navbar-toggler__icon']}>
        <span style={{backgroundColor: color}}></span>
        <span style={{backgroundColor: color}}></span>
        <span style={{backgroundColor: color}}></span>
      </div>
    </button>
  );
};
export default NavbarToggler;
