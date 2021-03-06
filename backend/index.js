const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/empleado',require('./routes/empleado.routes'));
app.use('/api/recurso',require('./routes/recursos.routes'));
app.use('/api/notificacion',require('./routes/notificacion.routes'));
app.use('/api/login',require('./routes/login.routes'));
app.use('/api/reunion',require('./routes/reunion.routes'));
app.use('/api/email', require('./routes/email.routes'));
app.use('/api/oficina', require('./routes/oficina'));

//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});