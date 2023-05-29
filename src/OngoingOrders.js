import React, { useEffect, useState } from 'react';
const OngoingOrders = () => {
    const [data, setData] = useState(null);
    const url = 'https://spare-parts-php.herokuapp.com/ongoing_orders.php';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({}),
                });
                const textResponse = await response.text();
                const jsonData = JSON.parse(textResponse.substring(textResponse.indexOf('{')));
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <div className="Total_Orders">
                        <p>Total Orders: {data.total_orders}</p>
                    </div>



                    {data.ongoing_orders.map((order) => (
                        <div className="OrderPreview" key={order.id}>
                            <h2>ID: {order.id}</h2>
                            <p>Type: {order.type}</p>
                            <p>Model: {order.model}</p>
                            <p>Spare part: {order.spare_part}</p>
                            <p>Created at: {order.created_at}</p>
                            <p>Status: {order.status}</p>
                            <p>Phone number: {order.phone_number}</p>
                        </div>
                    ))}


                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default OngoingOrders;