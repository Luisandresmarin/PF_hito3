const request = require('supertest');
const app = require('../app'); // Asegúrate de que 'app' exporte la instancia de Express
const pool = require('../config/db'); // Para interactuar con la base de datos

describe('POST /auth/register', () => {
  it('Debería registrar un nuevo usuario correctamente', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        nombre: 'Juan3 Pérez2',
        email: 'juan3@example.com',
        contraseña: '123456',
        rol: 'usuario'
      });

    expect(response.status).toBe(201);
    expect(response.body.mensaje).toBe('Usuario registrado correctamente');
  });

  it('Debería devolver un error si falta algún campo', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        nombre: 'Juan Pérez',
        email: 'juan@example.com',
        contraseña: '123456'
        // Faltando rol
      });

    expect(response.status).toBe(400);
    expect(response.body.mensaje).toBe('Todos los campos son requeridos');
  });

  it('Debería devolver un error si el email ya está registrado', async () => {
    // Primero, registramos un usuario con el mismo email
    await request(app)
      .post('/api/auth/register')
      .send({
        nombre: 'Juan Pérez',
        email: 'juan@example.com',
        contraseña: '123456',
        rol: 'usuario'
      });

    // Luego, intentamos registrar otro usuario con el mismo email
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        nombre: 'Carlos Díaz',
        email: 'juan@example.com',
        contraseña: '654321',
        rol: 'usuario'
      });

    expect(response.status).toBe(400);
    expect(response.body.mensaje).toBe('El email ya está registrado');
  });
});

describe('POST /auth/login', () => {
  it('Debería loguearse correctamente con las credenciales correctas', async () => {
    // Primero, registramos un usuario
    await request(app)
      .post('/api/auth/register')
      .send({
        nombre: 'Juan Pérez',
        email: 'juan@example.com',
        contraseña: '123456',
        rol: 'usuario'
      });

    // Ahora intentamos hacer login con el mismo usuario
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'juan@example.com',
        contraseña: '123456'
      });

    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe('Login exitoso');
    expect(response.body.token).toBeDefined(); // Verificamos que el token esté presente
  });

  it('Debería devolver un error si las credenciales son incorrectas', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'juan@example.com',
        contraseña: 'wrongpassword'
      });

    expect(response.status).toBe(400);
    expect(response.body.mensaje).toBe('Usuario o contraseña incorrectos');
  });

  it('Debería devolver un error si falta el email o la contraseña', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'juan@example.com'
        // Faltando contraseña
      });

    expect(response.status).toBe(400);
    expect(response.body.mensaje).toBe('El email y la contraseña son requeridos');
  });
});
