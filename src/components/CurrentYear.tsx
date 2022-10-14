import * as React from 'react';
import { format } from 'date-fns';

const CurrentYear: React.FC = () => <span>{format(new Date(), 'yyyy')}</span>;

export default CurrentYear;
