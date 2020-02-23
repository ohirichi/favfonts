import axios from "axios";

export default async (req, res) => {
    try {
        const data = await axios.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAFYko9IB-11qtZEDihlFXZS5t9PNUtnKg&sort=popularity");
        res.status(200).json(data.data.items);
    }
    catch (err) {
        return console.log(err);
    }  

  
}