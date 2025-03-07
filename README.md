# hito3
desarrollo de backend 

**Endpoints de Autenticación (/api/auth)
POST /register → Registra un nuevo usuario.
POST /login → Inicia sesión y devuelve un token.
GET / → Obtiene detalles del usuario autenticado (requiere token y rol usuario o admin).
PUT /modificar → Modifica datos del usuario autenticado (requiere token y rol usuario).
GET /:id → Obtiene detalles de un usuario por ID (requiere autenticación).

**Endpoints de Usuarios (/api/usuarios)
GET / → Obtiene detalles del usuario autenticado (requiere token y rol usuario o admin).
PUT /modificar → Modifica datos del usuario autenticado (requiere token y rol usuario).
GET /:id → Obtiene detalles de un usuario por ID (requiere autenticación).

**Endpoints de Productos (/api/productos)
GET / → Obtiene todos los productos.
POST / → Crea un nuevo producto (requiere token y rol admin).
PUT /:id_producto → Actualiza un producto (requiere token y rol admin).
DELETE /:id_producto → Elimina un producto (requiere token y rol admin).

**Endpoints de Pedidos (/api/pedidos)
POST / → Crea un nuevo pedido.
GET /historial → Obtiene todos los pedidos.
GET /:id_usuario → Obtiene los pedidos de un usuario específico.
GET /historial/:id → Obtiene el detalle de un pedido específico.
PUT /actualizar → Actualiza el estado de un pedido.

**Endpoints de Transacciones (/api/transacciones)
POST / → Completa una transacción y devuelve un mensaje de éxito.
