'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

import classes from './main-navigation.module.scss';
import NavbarToggler from '@/components/Atoms/Buttons/NavbarToggler';
import BrandImage from '@/shared/assets/img/logo-why-2.png';

import { MenuItem } from '@/shared/lib/menu/menu';

interface Props {
  variant?: string;
  menu: MenuItem[] | undefined;
}

const MainNavigation: FC<Props> = ({ variant = 'regular', menu = [] }) => {
  const [active, setActive] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams();

  const classNames = cx(classes.nav, {
    [classes[`nav--${variant}`]]: variant,
  });

  const logoClasses = cx(classes.nav__logo);

  const collapseClasses = cx(
    classes.nav__section,
    classes['nav__section--collapse']
  );

  const nonCollapseClasses = cx(classes.nav__section, {
    [classes['nav__section--non-collapse']]: true,
    [classes.opened]: active,
  });

  const toggleNavbarHandler = useCallback(() => {
    if (!active) {
      router.push(`#main-menu`, { shallow: true, scroll: false });
    } else {
      router.back();
    }
  }, [active, router]);

  useEffect(() => {
    if (typeof window !== undefined) {
      const body = document.querySelector('body');
      const pattern = /.*#main-menu/;

      if (body) {
        if (pattern.test(window.location.hash)) {
          body.classList.add('overflow-y-hidden');
          body.classList.add('md:overflow-y-auto');
          setActive(true);
        } else {
          body.classList.remove('overflow-y-hidden');
          body.classList.remove('md:overflow-y-auto');
          setActive(false);
        }
      }
    }
  }, [params]);

  return (
    <nav className={classNames}>
      <section className={collapseClasses}>
        <Link className={logoClasses} href="/" title="WeKnow INC">
          <Image
            className="block w-[125px] md:w-[150px]"
            alt="WeKnow Brand"
            src={BrandImage}
          />
        </Link>
        <NavbarToggler
          className={classes.nav__toggler}
          onClick={toggleNavbarHandler}
          active={active}
        />
      </section>
      <section className={nonCollapseClasses}>
        <ul className={classes.menu}>
          {menu.map((item, index) => {
            const linkClasses = cx(classes.menu__link, {
              [classes['menu__link--featured']]: item.featured,
            });
            return (
              <li className={classes.menu__item} key={`${item.href}-${index}`}>
                <Link
                  className={linkClasses}
                  href={item.href}
                  title={item.title}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};
export default MainNavigation;
