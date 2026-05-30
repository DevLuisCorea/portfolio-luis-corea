Si estás usando **Astro + React**, una forma sencilla es crear un componente React que reciba un `url` como prop y genere un QR dentro de un modal.

### 1. Instala una librería para generar QR

Una opción popular es:

```bash
npm install react-qr-code
```

---

### 2. Crea el componente `QrModal.jsx`

```jsx
import QRCode from "react-qr-code";

export default function QrModal({
  isOpen,
  onClose,
  url,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Compartir enlace</h2>

        <div className="qr-container">
          <QRCode
            value={url}
            size={220}
          />
        </div>

        <p>{url}</p>
      </div>
    </div>
  );
}
```

---

### 3. Agrega estilos básicos

```css
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
}

.modal {
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 350px;
  text-align: center;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  border: none;
  background: transparent;
  font-size: 18px;
}

.qr-container {
  margin: 20px 0;
}
```

---

### 4. Consumir el componente desde Astro

Si tu página es `index.astro`:

```astro
---
import QrModalWrapper from "../components/QrModalWrapper.jsx";
---

<QrModalWrapper client:load />
```

---

### 5. Crear un wrapper con estado React

```jsx
import { useState } from "react";
import QrModal from "./QrModal";

export default function QrModalWrapper() {
  const [open, setOpen] = useState(false);

  const link =
    "https://mi-sitio.com/producto/123";

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Mostrar QR
      </button>

      <QrModal
        isOpen={open}
        onClose={() => setOpen(false)}
        url={link}
      />
    </>
  );
}
```

---

### Alternativa sin librería React

También puedes generar el QR usando una API pública:

```jsx
<img
  src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}`}
  alt="QR"
/>
```

Pero para producción suele ser mejor usar una librería como `react-qr-code` o `qrcode`, ya que no dependes de un servicio externo.

Si ya usas un sistema de modales (por ejemplo con Tailwind, Shadcn UI o Radix UI), puedo mostrarte una versión integrada con ese stack.
