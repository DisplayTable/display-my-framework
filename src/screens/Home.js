import React, { useEffect } from "react";
import { useDMFInterceptedFetch } from "../lib/fetch/fetch";

export const HomeScreen = (props) => {

    console.log(props);

    const { interceptedFetch } = useDMFInterceptedFetch();

    useEffect(() => {

        interceptedFetch(
                ['https://run.mocky.io/v3/cd66fd73-c956-4118-a92e-1f2953ba7ba7'], 
                [
                    {status: 401, callback: response => console.log("Not logged")},
                    {status: 200, callback: response => console.log("Todo ok")}
                ]
            )
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));

    }, []);

    return <>
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <p>Lorem Ipsum</p>
    </>
}