import React from 'react';
import { Button } from './Button';

export const EmptyState = ({
  title = 'No results found',
  description = 'Try adjusting your search filters or check back later.',
  actionLabel,
  onAction,
  icon: Icon,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-900/30 ${className}`}>
      {Icon && (
        <div className="p-4 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-full mb-4">
          <Icon className="h-8 w-8" />
        </div>
      )}
      <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-1">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-5">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="outline" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
