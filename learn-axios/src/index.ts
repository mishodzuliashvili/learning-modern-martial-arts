import axios from "axios";

type Quote = {
    text: string;
    author: string;
};

async function getQuotes() {
    const quotes = (
        await axios.get("/api/quotes", {
            params: {
                // author: "Albert Einstein"
            },
        })
    ).data as Quote[];
    return quotes;
}

getQuotes().then((quotes) => {
    console.log(quotes[0]);
});

axios
    .post("/api/quotes", {
        text: "I am a genius",
        author: "Albert Einstein",
    })
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
function getUserAccount() {
    return axios.get("/api/user/12345");
}

function getUserPermissions() {
    return axios.get("/api/user/12345/permissions");
}

Promise.all([getUserAccount(), getUserPermissions()]).then(function ([
    account,
    permissions,
]) {
    console.log(account, permissions);
});

axios.post("/user", document.querySelector("#my-form"), {
    headers: {
        "Content-Type": "application/json",
    },
});
const instance = axios.create({
    baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});

instance.get("/user/12345");
