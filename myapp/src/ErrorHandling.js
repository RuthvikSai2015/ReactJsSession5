import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
export default function ErrorHandling() {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallBackComponent}> 
                 <Header />
             </ErrorBoundary>
            <MainComponent />
            <Footer />
        </>
    )
}
function ErrorFallBackComponent() {
    return <p> Oops Something Went wrong try again Later!!!!!!!!</p>
}
function Header() {
    const user = null;
    return <h1>Header Component {user?.name}</h1>
}
function MainComponent() {
    return <h1>Main Component</h1>
}

function Footer() {
    return <h1>Footer Component</h1>
}

