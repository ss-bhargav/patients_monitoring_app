// const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

// export const GetPatientsDetails = async () => {
//     const res = await fetch(API_URL);

//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }

//     return res.json();
// };
export const GetPatientsDetails = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    return fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
};

export const myLoader = (src: string) => {
    return src;
};
