import { Component } from 'react'
import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'
export class App extends Component {
    render() {
        return (
            <>
                <h1>
                    {' '}
                    React TypeScript Webpack Starter Template - {
                        process.env.NODE_ENV
                    }{' '}
                    {process.env.name}
                </h1>
                <img src={IMAGE} alt="React Logo" width="300" height="300" />
                <img src={LOGO} alt="React Logo" width="300" />
                <ClickCounter />
            </>
        )
    }
}
