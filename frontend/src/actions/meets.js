import axios from 'axios';

import { GET_MEETS } from './types';

export const getMeets = () => dispatch => {
    let url = "http://127.0.0.1:8000/api/v1/meets/"
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
                console.log("failed to fetch api")
            }
            console.log(response)
            return response;
        })
        .then((response) => response.json())
        .then((items) => this.setState({ items }))
        .catch(() => this.setState({ hasError: true }))
}