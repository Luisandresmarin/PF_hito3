## 📌 API Endpoints  

### **🔐 Autenticación (`/api/auth`)**  
- **POST `/register`** → Registra un nuevo usuario.  
- **POST `/login`** → Inicia sesión y devuelve un token.  
- **GET `/`** → Obtiene detalles del usuario autenticado. *(Requiere token: `usuario` o `admin`)*  
- **PUT `/modificar`** → Modifica datos del usuario autenticado. *(Requiere token: `usuario`)*  
- **GET `/:id`** → Obtiene detalles de un usuario por ID. *(Requiere autenticación)*  

<br>

### **👤 Usuarios (`/api/usuarios`)**  
- **GET `/`** → Obtiene detalles del usuario autenticado. *(Requiere token: `usuario` o `admin`)*  
- **PUT `/modificar`** → Modifica datos del usuario autenticado. *(Requiere token: `usuario`)*  
- **GET `/:id`** → Obtiene detalles de un usuario por ID. *(Requiere autenticación)*  

<br>

### **🛍️ Productos (`/api/productos`)**  
- **GET `/`** → Obtiene todos los productos.  
- **POST `/`** → Crea un nuevo producto. *(Requiere token: `admin`)*  
- **PUT `/:id_producto`** → Actualiza un producto. *(Requiere token: `admin`)*  
- **DELETE `/:id_producto`** → Elimina un producto. *(Requiere token: `admin`)*  

<br>

### **📦 Pedidos (`/api/pedidos`)**  
- **POST `/`** → Crea un nuevo pedido.  
- **GET `/historial`** → Obtiene todos los pedidos.  
- **GET `/:id_usuario`** → Obtiene los pedidos de un usuario específico.  
- **GET `/historial/:id`** → Obtiene el detalle de un pedido específico.  
- **PUT `/actualizar`** → Actualiza el estado de un pedido.  

<br>

### **💳 Transacciones (`/api/transacciones`)**  
- **POST `/`** → Completa una transacción y devuelve un mensaje de éxito.  
