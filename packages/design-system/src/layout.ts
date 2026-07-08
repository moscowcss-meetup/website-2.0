// Базовые layout-значения — от темы не зависят.
const contract = {
  display: {
    inlineFlex: null,
    flex: null,
    grid: null,
    none: null,
    block: null,
  },
  position: {
    relative: null,
    absolute: null,
    fixed: null,
    sticky: null,
  },
  alignItems: {
    center: null,
    stretch: null,
  },
  justifyContent: {
    center: null,
    spaceBetween: null,
    flexStart: null,
  },
  flexDirection: {
    column: null,
    row: null,
  },
  inset: {
    zero: null,
  },
} as const;

const values = {
  display: {
    inlineFlex: 'inline-flex',
    flex: 'flex',
    grid: 'grid',
    none: 'none',
    block: 'block',
  },
  position: {
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
    sticky: 'sticky',
  },
  alignItems: {
    center: 'center',
    stretch: 'stretch',
  },
  justifyContent: {
    center: 'center',
    spaceBetween: 'space-between',
    flexStart: 'flex-start'	,

  },
  flexDirection: {
    column: 'column',
    row: 'row',
  },
  inset: {
    zero: '0',
  },
};

export const layout = { contract, values };
