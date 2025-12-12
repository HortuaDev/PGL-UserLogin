# Drawer en la Aplicación

Se ha implementado un **drawer** (menú lateral de navegación) en el layout principal.

## Ejemplo de Código

```
const MainLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
        }}
      />
    </Drawer>
  );
};

```

- Esto asegura que, al abrir la app, la pantalla de bienvenida es lo primero que verá el usuario.

```
<Drawer.Screen
    name="index"
    options={{
        title: "Inicio",
    }}
/>
```

[Volver al README](../README.md)
