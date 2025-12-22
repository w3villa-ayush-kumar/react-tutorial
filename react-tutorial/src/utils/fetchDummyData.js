export const fetchDummyData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Fetched Data: ", data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
};
