import axios from 'axios';


export async function activeJson() {
    try {
        const response = await axios.get('https://news-api-7cq6.onrender.com/', {
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

    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {

                let resp = await fetchData();

                return resolve(resp);
            } catch (error) {
                return resolve({
                    data: []
                });

            }
        }, 2600)
    })
}

async function fetchData() {
    let response = await fetch('/data.json');
    return await response.json()
}