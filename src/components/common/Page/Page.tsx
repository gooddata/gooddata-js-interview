import React, { FunctionComponent, ReactNode } from 'react';
import styles from './Page.module.scss';
import { Loading } from '../Loading';

export interface PageProps {
  children?: ReactNode;
  loading?: boolean;
  inner: boolean;
}

export const Page: FunctionComponent<PageProps> = ({
  children,
  loading = false,
  inner = false,
}) => (
  <div className={`${loading ? styles.loadingStyle : null} ${inner ? styles.contentInner : null}`}>
    {loading ? <Loading spinning /> : ''}
    {children}
  </div>
);
