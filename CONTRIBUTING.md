# Contributing to LQHApp

Thank you for your interest in contributing to LQH App! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### 1. Fork and Clone
1. Fork the repository
2. Clone your fork locally
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/[original-repo]/LQH-program.git
   ```

### 2. Create a Branch
- Create a new branch for your contribution:
  ```bash
  git checkout -b feature/your-feature-name
  ```
- Use meaningful branch names (e.g., `feature/add-new-poomsae`, `fix/navigation-bug`)

### 3. Development Guidelines
- Follow the existing code style and formatting
- Use TypeScript for type safety
- Ensure PWA functionality remains intact
- Test your changes offline
- Keep the UI consistent with the existing design
- Comment your code when necessary

### 4. Commit Guidelines
- Use clear and descriptive commit messages
- Format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat(poomsae): add new Won Il Dan form`

### 5. Submit a Pull Request
1. Push your changes to your fork
2. Create a Pull Request from your branch to the main repository
3. Include a clear description of your changes
4. Link any related issues

### 6. Review Process
- All PRs will be reviewed
- Address any requested changes
- Maintain a constructive dialogue
- Be patient during the review process

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---

# Contribuir a LQHApp

¡Gracias por tu interés en contribuir a LQH App! Este documento proporciona pautas e instrucciones para contribuir a este proyecto.

## Código de Conducta

Al participar en este proyecto, aceptas mantener un ambiente respetuoso e inclusivo para todos.

## Cómo Contribuir

### 1. Fork y Clonación
1. Haz fork del repositorio
2. Clona tu fork localmente
3. Añade el repositorio upstream:
   ```bash
   git remote add upstream https://github.com/[original-repo]/LQH-program.git
   ```

### 2. Crear una Rama
- Crea una nueva rama para tu contribución:
  ```bash
  git checkout -b feature/nombre-de-tu-feature
  ```
- Usa nombres significativos (ej., `feature/agregar-nuevo-poomsae`, `fix/bug-navegacion`)

### 3. Pautas de Desarrollo
- Sigue el estilo y formato de código existente
- Usa TypeScript para seguridad de tipos
- Asegura que la funcionalidad PWA permanezca intacta
- Prueba tus cambios sin conexión
- Mantén la UI consistente con el diseño existente
- Comenta tu código cuando sea necesario

### 4. Pautas de Commits
- Usa mensajes de commit claros y descriptivos
- Formato: `tipo(alcance): descripción`
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Ejemplo: `feat(poomsae): agregar nueva forma Won Il Dan`

### 5. Enviar un Pull Request
1. Sube tus cambios a tu fork
2. Crea un Pull Request desde tu rama al repositorio principal
3. Incluye una descripción clara de tus cambios
4. Enlaza cualquier issue relacionado

### 6. Proceso de Revisión
- Todos los PRs serán revisados
- Atiende cualquier cambio solicitado
- Mantén un diálogo constructivo
- Ten paciencia durante el proceso de revisión

## Configuración de Desarrollo

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construir para producción:
   ```bash
   npm run build
   ``` 