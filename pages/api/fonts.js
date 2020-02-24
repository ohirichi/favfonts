import axios from "axios";

export default async (req, res) => {
    try {
        const data = await axios.get(process.env.googleUrl);
        res.status(200).json(data.data.items);
    }
    catch (err) {
        return console.log(err);
    }  

  
}