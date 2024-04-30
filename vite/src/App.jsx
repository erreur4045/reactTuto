import React, {useState} from 'react'

function App() {

    const [title, setTitle] = useState('Hello, world!')
    const [count, setCount] = useState(0)
    const [image, setImage] = useState('')
    const randomTitle = ['Hello, world!', 'Bonjour, monde!', 'Hola, mundo!', 'Hallo, Welt!', 'Ciao, mondo!', 'こんにちは、世界！', '안녕, 세상!'][Math.floor(Math.random() * 7)]
    const handleClick = () => {
        setTitle(randomTitle)
        setCount(count + 1)
    }
    const handleReset = () => {
        setCount(0)
    }

    const getRandomImageFromApi = async () => {
        let width = 100
        let height = 100
        let response = await fetch(`https://source.unsplash.com/random/${width}x${height}`)
        setImage(response.url)

    }

    let imageSize = 'image';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
            <h1 style={{color: '#333', marginBottom: '20px'}}>{title}</h1>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '10px'
            }} onClick={handleClick}>
                Cliquer !
            </button>
            <p>Vous avez cliqué {count} fois</p>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '10px'
            }} onClick={handleReset}>
                reset count
            </button>
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#ffc107',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '10px'
            }} onClick={getRandomImageFromApi}>
                Get random image
            </button>
            <div>
                <p>Image size</p>
                {image && <img className={imageSize} src={image} alt="random"
                               style={{maxWidth: '100%', height: 'auto', borderRadius: '5px'}}/>}
            </div>
        </div>
    )
}

export default App
