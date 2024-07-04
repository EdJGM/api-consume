import { useState, useEffect } from "react";


function useNasaApi(endpoint, apiKey) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const baseUrl = endpoint.startsWith('search') ? 'https://images-api.nasa.gov' : 'https://api.nasa.gov';
        fetch(`${baseUrl}/${endpoint}${baseUrl.includes('images-api') ? '' : '?api_key=' + apiKey}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la petición");
                }
                return response.json();
            })
            .then((data) => {
                if (endpoint.startsWith('search')) {
                    // Obtener detalles de video para cada elemento
                    const videoPromises = data.collection.items
                        .filter(item => item.data[0].media_type === "video")
                        .map(item =>
                            fetch(item.href)
                                .then(res => res.json())
                                .then(videoData => {
                                    const videoFile = videoData.find(file => file.endsWith('.mp4'));
                                    return { ...item, videoUrl: videoFile };
                                })
                        );

                    Promise.all(videoPromises).then(videoItems => {
                        setData({ ...data, collection: { ...data.collection, items: videoItems } });
                        setLoading(false);
                    });
                } else {
                    setData(data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [endpoint, apiKey]);

    return { data, loading, error };
}

const Fetch = ({ endpoint }) => {
    const apiKey = "3LBZ5nW34GGbQ4MlPhuhEiMC0jW6JuDZFYLJCFNq";
    const { data, loading, error } = useNasaApi(endpoint, apiKey);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return <div>Datos no encontrados</div>
    }

    return (
        <div>
            {endpoint.includes('planetary/apod') && data.url && (
                <img src={data.url} alt={data.title} style={{ width: '300px', height: '300px', borderRadius: '10%' }} />
            )}
            {endpoint.includes('neo/rest/v1/feed') && data.near_earth_objects && (
                <div>
                    {Object.keys(data.near_earth_objects).map((date) => (
                        <div key={date}>
                            <h2>{date}</h2>
                            {data.near_earth_objects[date].map((asteroid) => (
                                <div key={asteroid.id}>
                                    <h3>{asteroid.name}</h3>
                                    <p>{asteroid.is_potentially_hazardous_asteroid ? 'Potencialmente peligroso' : 'No peligroso'}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
            {endpoint.startsWith('search') && data.collection && (
                <div>
                    {data.collection.items.map((item, index) => (
                        <div key={index}>
                            {item.data[0].media_type === "video" && (
                                <>
                                    {item.videoUrl ? (
                                        <video width="300" height="300" controls>
                                            <source src={item.videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <p>Video no disponible</p>
                                    )}
                                    <h3>{item.data[0].title}</h3>
                                    <p>{item.data[0].description}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>

    );

};

export default Fetch;