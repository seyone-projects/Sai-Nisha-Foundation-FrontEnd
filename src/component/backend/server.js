const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

const aadhaarRoutes = require('./routes/aadhaar');
const memberRoutes  = require('./routes/members');


const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

app.use('/api/aadhaar',  aadhaarRoutes);
app.use('/api/members',  memberRoutes);

app.get('/api/health', (req, res) =>
  res.json({ status: 'ok', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' })
);
// ADD THIS ROUTE
app.get('/', (req, res) => {
  res.send('Backend is running successfully');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Backend running at http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch(err => { console.error('❌ MongoDB error:', err.message); process.exit(1); });
