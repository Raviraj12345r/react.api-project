import { useEffect, useState } from "react";
import axios from 'axios';


function UserList(){

    const [users,setUsers]=useState([]);
    const getData=async()=>{
        try {
            const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(()=>{
        getData(); //function call when component loads for the very first time
    },[]);

    return (<div>
        <h2 style={{textAlign:"center"}}> User List</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>current_price</th>
                    <th>Market_cap</th>
                    <th>High_24h</th>
                    <th>Low_24h</th>
                    <th>Price_change_24h</th>
                    <th>Total_supply</th>
                    <th>Max_supply</th>
                    <th>Ath</th>
                    <th>Ath_date</th>
                    <th>Atl</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map((item)=>{
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.symbol}</td>
                            <td>{item.name}</td>
                            <td>{item.current_price}</td>
                            <td>{item.market_cap}</td>
                            <td>{item.high_24h}</td>
                         <td>{item.low_24h}</td>
                         <td>{item.price_change_24h}</td>
                         <td>{item.total_supply}</td>
                            <td>{item.max_supply}</td>
                            <td>{item.ath}</td>
                            <td>{item.ath_date}</td>
                            <td>{item.atl}</td>
                        
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
    
}
export default UserList;
// 
// https://docs.google.com/document/d/1rJ73PKoWaBT1Hd4prQpzPV3qkDsL5gSHG2PYV3zfXXw/edit
