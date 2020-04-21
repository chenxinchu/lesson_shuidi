import * as React from 'react';
import { HelloComponent } from './hello'
export const App = () => {
    // react hooks
    const [name, setName] = React.useState('initName')
    const setUsernameState = () => {
    setName(event.target.value);
    }
    return (
        <>
            <HelloComponent userName={name} />
            <NameEditComponent userName={name} onChange={setUsernameState} />
        </>
    )
}