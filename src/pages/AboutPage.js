import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../Components/shared/Card'

function AboutPage() {
  return (
    <Card>
        <h1>Review App</h1>
        <h4>This app is for providing review for services.</h4>
        <p>React features used in this app:</p>
        <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>React Router</li>
            <li>Props</li>
            <li>Styled Component</li>
            <li>Form in React</li>
            <li>Props traversing(down to up and up to down)</li>
            <li>Context API</li>
            <li>JSON Server</li>
        </ul>

        <p>Version: 1.0.0</p>

        <Link to='/'>
            Back to Home
        </Link>
    </Card>
  )
}

export default AboutPage