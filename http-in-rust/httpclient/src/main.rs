use reqwest::blocking::{Client, ClientBuilder};
use reqwest::redirect::Policy;
fn main() {
    let http_client = Client::new();
    let http_result = http_client.get("https://google.com").send();

    if http_result.is_ok() {
        println!("{:#?}", http_result.ok().unwrap().status());
    } else if http_result.is_err() {
        println!("Error occured: {:#?}", http_result.err())
    }

    // Getting Windows localhost on WSL: cat /etc/resolv.conf
    let post_result = http_client
        .post("http://172.22.176.1:3001/send_data")
        .body("{\"name\": \"misho\"}")
        .send();
    println!("{:#?}", post_result.ok().unwrap().text());

    let redir_policy = Policy::limited(5);
    let http_client = ClientBuilder::new()
        .redirect(redir_policy)
        .build()
        .ok()
        .unwrap();
    let http_result = http_client.get("http://172.22.176.1:3001/weather").send();
    if http_result.is_err() {
        println!("{:#?}", http_result.err())
    } else {
        println!(
            "Weather app result: {:#?}",
            http_result.ok().unwrap().text().unwrap()
        )
    }
}
