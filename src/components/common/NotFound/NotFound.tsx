import React from 'react';
import { Page } from '../../common';
import styles from './NotFound.module.scss';

export const NotFound = () => (
  <Page inner>
    <div className={styles.error}>
      <h1>404 Not Found</h1>
    </div>
  </Page>
);
