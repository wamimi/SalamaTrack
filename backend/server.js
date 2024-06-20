const express = require('express');
const sequelize = require('./config/db');
const app = express();
const { port } = require('./config/config');

app.use(express.json());

// Routes
const inventoryRoutes = require('./routes/inventoryRoutes');
const requestRoutes = require('./routes/requestRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');

app.use('/api/inventory', inventoryRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/shipments', shipmentRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('salamatrack API');
});

// Connect to the database and start the server
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.log('Error: ' + err));
