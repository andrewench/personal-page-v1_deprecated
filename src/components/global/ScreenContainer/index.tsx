import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Container } from '@components:global';
import styles from './ScreenContainer.module.scss';

interface IScreenContainer {
  anchor: string;
  children: ReactNode;
  className?: string;
}

export const ScreenContainer: FC<IScreenContainer> = ({
  anchor,
  children,
  className,
}) => {
  return (
    <Container flex className={classNames(styles.box, className)} id={anchor}>
      {children}
    </Container>
  );
};