# Ejemplo de Mensaje de Commit

Cuando hagas tu primer commit, deberías usar este formato siguiendo las reglas de AGENTS.md:

```bash
git add .
git commit -m "feat: Configurar estructura inicial del portafolio DAW

- Crear estructura de carpetas siguiendo convenciones kebab-case
- Implementar sistema de variables SASS con snake_case
- Configurar archivos base para desarrollo responsivo
- Establecer comandos npm según especificaciones de AGENTS.md"
```

## Otros ejemplos de commits futuros:

```bash
# Cuando agregues un nuevo componente
git commit -m "feat: Añadir componente NavegacionHeader con funcionalidad móvil"

# Cuando corrijas un bug
git commit -m "fix: Corregir problema de responsive en tarjetas de proyecto"

# Cuando refactorices código
git commit -m "refactor: Optimizar estructura de variables SASS para mejor mantenimiento"
```

## Recuerda siempre:
1. ✅ Ejecutar `npm run lint:fix` antes del commit
2. ✅ Probar con `npm run build:prod` que todo compila
3. ✅ Usar prefijos: feat/fix/refactor
4. ✅ Descripción clara y orientada a la acción