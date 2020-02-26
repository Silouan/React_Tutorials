import React, { Component } from 'react'

export default class DemoClass extends Component {
    render() {
        return (
            <div>
                <ContentOne></ContentOne>
                <ContentTwo></ContentTwo>
            </div>
        )
    }
}

class ContentOne extends React.Component {
    render() {
        return <div>
            <h1>This is Content One</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus harum facilis expedita omnis rem magnam reprehenderit, eaque fugit vel illum impedit quibusdam eligendi officia, explicabo cupiditate quam iste! Deleniti, sit.</p>
        </div>;
    }
}

class ContentTwo extends React.Component {
    render() {
        return <div>
            <h1>This is Content One</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus harum facilis expedita omnis rem magnam reprehenderit, eaque fugit vel illum impedit quibusdam eligendi officia, explicabo cupiditate quam iste! Deleniti, sit.</p>
        </div>;
    }
}