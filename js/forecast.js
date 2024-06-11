const KEY = "96b947a45d33d7dc1c49af3203966408";

// get data

const getData = async (city) => {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&units=metric&appid=${KEY}`;
    loader(true);
    const request = await fetch(base + query);
    console.log(request.status);
    if (request.status != 200) {
        loader(false);
        throw new Error("Bunday shahar yoq!!!");
    }
    const data = await request.json();
    loader(false);
    return data;
};
