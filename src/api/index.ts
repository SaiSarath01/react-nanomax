import axios from 'axios';
import { IListItem } from '../components/ListItem';
import { Resp } from '../pages/Latest';


export async function activeJson() {
    try {
        const response = await axios.get('https://lobste.rs/active.json', {
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