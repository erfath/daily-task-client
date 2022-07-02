import { format } from 'date-fns';
import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Sample() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="MyCalendar h-screen flex justify-center items-center">
            <div>
                <p className='text-center border-b-4 font-mono text-blue-600 font-bold text-2xl'>{format(date, 'PP')}</p>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
        </div>
    );
}