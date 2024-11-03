import axios from 'axios';


export async function activeJson() {
    try {
        let url = 'http://localhost:3002/'
        // let url = 'https://news-api-7cq6.onrender.com/'
        const response = await axios.get(url, {
            withCredentials: false,
            headers: {
                mode: 'no-cors',
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
}

export async function latestJson() {

    try {
        let url = 'http://localhost:3002/recent'
        // let url = 'https://news-api-7cq6.onrender.com/'
        const response = await axios.get(url, {
            withCredentials: false,
            headers: {
                mode: 'no-cors',
            },
        });
        return response;
    } catch (error) {
        throw error;
    }
}

async function fetchData() {
    let response = await fetch('/data.json');
    return await response.json()
}