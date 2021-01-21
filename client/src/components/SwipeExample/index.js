import React from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';

function Example() {
    return (
        <div className="card text-center text-light bg-dark m-3">
            <CardWrapper>
                <Card>
                    Hello World!
        </Card>
            </CardWrapper >
        </div>
    );
}

export default Example;