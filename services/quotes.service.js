const quoteApis = {
    southpark: {
        name: "South Park",
        url: "https://southparkquotes.onrender.com/v1/quotes"
    },
    strangerthings: {
        name: "Stranger Things",
        url: "https://strangerthings-quotes.vercel.app/api/quotes"
    },
    lucifer: {
        name: "Lucifer",
        url: "https://lucifer-quotes.vercel.app/api/quotes"
    }
};

export async function getRandomQuoteService(source) {
    const selectedApi = quoteApis[source.toLowerCase()];

    if (!selectedApi) {
        throw new Error("Invalid quote source. Use: southpark, strangerthings, or lucifer");
    }

    const response = await fetch(selectedApi.url);

    if (!response.ok) {
        throw new Error(`${selectedApi.name} API did not respond correctly`);
    }

    const data = await response.json();

    const quoteObject = Array.isArray(data) ? data[0] : data;

    return {
        source: selectedApi.name,
        quote: quoteObject.quote || "No quote found",
        character: quoteObject.character || quoteObject.author || "Unknown",
        originalData: data
    };
}