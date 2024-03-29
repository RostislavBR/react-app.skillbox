import React from 'react';
import styles from './notificationicon.css';

export function NotificationIcon() {
  return (
      <div className={styles['notifications-wrapper']}>
        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['notification-svg']}>
          <path d="M11.7235 0.276367H1.51072C0.808598 0.276367 0.240514 0.850834 0.240514 1.55296L0.234131 9.21252C0.234131 9.91465 0.808598 10.4891 1.51072 10.4891H11.7235C12.4256 10.4891 13.0001 9.91465 13.0001 9.21252V1.55296C13.0001 0.850834 12.4256 0.276367 11.7235 0.276367ZM11.7235 2.82955L6.6171 6.02104L1.51072 2.82955V1.55296L6.6171 4.74444L11.7235 1.55296V2.82955Z" fill="#D9D9D9"/>
        </svg>
      </div>
  );
}
