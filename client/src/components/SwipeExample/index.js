import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Card, CardWrapper } from 'react-swipeable-cards';

function Example() {
    return (
        <div>
            <CardWrapper>
                <Card>
                    Hello World!
        </Card>
            </CardWrapper >
        </div>
    );
}

export default Example;