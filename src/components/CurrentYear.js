import React from 'react';
import { format } from 'date-fns';

const CurrentYear = () => <span>{format(new Date(), 'yyyy')}</span>;

export default CurrentYear;
