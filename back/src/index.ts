import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(res => {
        console.log("Database connected");
        app.listen(PORT,()=>{
            console.log(`Server listening on port ${PORT} `);
        });
    })
        .catch((error)=>console.log(error))
            
        
        
        



