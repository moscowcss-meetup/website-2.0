// Конфиг SVGO для чистки иконок. Рассчитан на МОНОХРОМНЫЕ иконки: цвета
// приводятся к `currentColor`, фиксированные width/height срезаются, чтобы
// размером управлял сгенерированный компонент. Для многоцветных иконок убери
// `convertColors.currentColor` и `removeDimensions`.
// Важно: SVGO 4 по умолчанию сохраняет viewBox, поэтому removeViewBox не трогаем.
export default {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    { name: 'convertColors', params: { currentColor: true } },
    { name: 'removeAttrs', params: { attrs: '(stroke|fill):((?!currentColor).)*' } },
  ],
};
