// src/components/StatusBadge.jsx
import React from 'react';
import classNames from 'classnames';
import './StatusBadge.css';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

const StatusBadge = ({ status }) => {
  const badgeClass = classNames('badge', {
    'badge-success': status === 'success',
    'badge-error': status === 'error',
    'badge-warning': status === 'warning'
  });

  const getIcon = () => {
    switch (status) {
      case 'success':
        return <FaCheckCircle className="icon" />;
      case 'error':
        return <FaTimesCircle className="icon" />;
      case 'warning':
        return <FaExclamationTriangle className="icon" />;
      default:
        return null;
    }
  };

  return (
    <span className={badgeClass}>
      {getIcon()} <span className="text">{status.toUpperCase()}</span>
    </span>
  );
};

export default StatusBadge;
