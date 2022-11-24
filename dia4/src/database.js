let mongoose = require("mongoose");


mongoose.connect("mongodb+srv://JavierFZ:Calzada99@cluster0.ctllnsg.mongodb.net/Photos",
                    {useNewUrlParser: true,
                    useUnifiedTopology: true})

.then((db) => {
    console.log("database conectada en " + db.connection.host)
})
.catch((error) => {
    console.log(error);
})