const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Configure Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


// Define routes
app.get('/', (req, res) => {
    // Example data to render
    //let app=req.query.terms;
    const context = {
        application: req.query.terms,
      
    };
    
    // Render the 'home' template with context data
    res.render('home', context);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 