import express from "express"
import http from "http"
import cors from "cors";
import serviceRouter from "./routes/service.route.js";
import brandRouter from "./routes/brand.route.js"



const app = express();
const server = http.createServer(app)

// Middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Basic route
app.use("/api/service",serviceRouter)
app.use("/api/brand",brandRouter)



// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

server.listen(3000, () => {
    console.log("server is running on port 3000")
})
