import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = 5400;

//Enable CORS
app.use(cors());
app.use(express.json());

//Create
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    // Here you would typically save the product to a database
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
});

//Fetch all products
app.get('/api/products', (req, res) => {
    res.status(200).json(sampleProducts);
});

//Update
app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    // Here you would typically update the product in a database
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
});

//Delete
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    // Here you would typically delete the product from a database
    res.status(200).json({ message: `Product with id ${id} deleted successfully` });
});

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
