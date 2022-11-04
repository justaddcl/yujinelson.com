import * as React from 'react';
import { format } from 'date-fns';

export const CurrentYear: React.FC = () => (
  <span>{format(new Date(), 'yyyy')}</span>
);
