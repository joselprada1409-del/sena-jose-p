
import express from 'express';

const app = express();
const PORT = 3001;

// Actividades iniciales
const actividades = [
    { id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
    { id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
    { id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
    { id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 }
];

// Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Permite recibir JSON
app.use(express.json());

// R1: Estado del servidor
app.get('/estado', (req, res) => {
    res.json({
        servidor: 'ok',
        hora: new Date(),
        totalActividades: actividades.length
    });
});

// Consultar todas las actividades y filtrar por tipo o precio
app.get('/actividades', (req, res) => {
    let resultado = actividades;

    if (req.query.tipo) {
        resultado = resultado.filter(
            actividad => actividad.tipo === req.query.tipo
        );
    }

    if (req.query.precioMax) {
        const precioMax = Number(req.query.precioMax);

        resultado = resultado.filter(
            actividad => actividad.precio <= precioMax
        );
    }

    res.json(resultado);
});

// R2: Actividades gratis
app.get('/actividades/gratis', (req, res) => {
    const gratis = actividades.filter(
        actividad => actividad.precio === 0
    );

    res.json(gratis);
});

// Consultar actividad por ID
app.get('/actividades/:id', (req, res) => {
    const id = Number(req.params.id);

    const actividad = actividades.find(
        actividad => actividad.id === id
    );

    if (!actividad) {
        return res.status(404).json({
            error: 'Actividad no encontrada'
        });
    }

    res.json(actividad);
});

// R3: Crear actividad
app.post('/actividades', (req, res) => {
    const nombre = req.body.nombre;
    const tipo = req.body.tipo;
    const precio = req.body.precio;

    if (!nombre) {
        return res.status(400).json({
            error: 'Falta el nombre'
        });
    }

    if (!tipo) {
        return res.status(400).json({
            error: 'Falta el tipo'
        });
    }

    if (typeof precio !== 'number' || precio < 0) {
        return res.status(400).json({
            error: 'El precio debe ser un número mayor o igual a cero'
        });
    }

    const nueva = {
        id: actividades.length + 1,
        nombre: nombre,
        tipo: tipo,
        precio: precio
    };

    actividades.push(nueva);

    res.status(201).json(nueva);
});

// Ruta 404 al final
app.use((req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
