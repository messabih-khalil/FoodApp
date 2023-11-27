import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Button } from '@/components/ui/button';
const QrGenerator = ({ data }) => {
    const [tableCounter, setTableCounter] = useState(0);

    return (
        <div>
            <QRCode
                size={150}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value={data[tableCounter]}
                viewBox={`0 0 150 150`}
            />

            <Button
                onClick={() =>
                    tableCounter != data.length
                        ? setTableCounter((prev) => prev + 1)
                        : null
                }
                className='w-full mt-5'
            >
                Done
            </Button>
        </div>
    );
};

export default QrGenerator;
