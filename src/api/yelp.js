import React from 'react';
import axios from 'axios';
import {API_URL, API_TOKEN} from "@env";


export default axios.create({
    baseURL: API_URL, 
    headers: {
        Authorization: API_TOKEN

    }
})