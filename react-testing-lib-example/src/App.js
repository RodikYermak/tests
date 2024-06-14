import React from 'react';

function App() {
    const [data, setData] = React.useState(null);
    const [toggle, setToggle] = React.useState(false);
    const [value, setValue] = React.useState('');

    const onClick = () => setToggle((prev) => !prev);

    React.useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    return (
        <div>
            <h1 data-testid="value-elem">{value}</h1>
            {toggle && <div data-testid="toggle-elem">toggle</div>}
            {data && <div>data</div>}
            <h1>Hello world</h1>
            <button data-testid="toggle-btn" onClick={onClick}>
                Click me
            </button>
            <input
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="input value...ZZZ"
            />
        </div>
    );
}

export default App;
