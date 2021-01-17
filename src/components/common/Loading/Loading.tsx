import { FunctionComponent, ReactNode } from 'react';
import { LoadingComponent } from '@gooddata/sdk-ui';
import styles from './Loading.module.scss';

export interface LoadingProps {
  spinning?: boolean;
  fullScreen?: ReactNode;
}

export const Loading: FunctionComponent<LoadingProps> = ({ spinning = false, fullScreen }) => (
  <div
    className={`${styles.loading} ${!spinning ? styles.hidden : null} ${
      fullScreen ? styles.fullScreen : null
    }`}
  >
    <LoadingComponent color="tomato" height={300} imageHeight={16} speed={2} />
  </div>
);
