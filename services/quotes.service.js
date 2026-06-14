export async function getRandomQuoteService() {
    const url = "https://movie-quote-api.herokuapp.com/v1/quote/";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("External movie quote API did not respond correctly");
    }

    const data = await response.json();

    return data;
}