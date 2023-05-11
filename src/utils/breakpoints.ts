type ScreenSize = {
  minWidth?: number;
  maxWidth?: number;
};

export function buildMediaQuery(screenSize: ScreenSize, not?: boolean): string {
  const { minWidth, maxWidth } = screenSize;
  let query = '@media ';

  if (minWidth) {
    query += `(min-width: ${minWidth}px)`;
  }

  if (minWidth && maxWidth) {
    query += ' and ';
  }

  if (maxWidth) {
    query += `(max-width: ${maxWidth}px)`;
  }

  if (not) {
    query = `not all and ${query}`;
  }

  return query;
}

export const SIZES = {
  sm: { maxWidth: 540 },
  md: { maxWidth: 1000 },
  lg: { minWidth: 1001 },
  max540: { maxWidth: 540 },
  min541: { minWidth: 541 },
  max1024: { maxWidth: 1024 },
  max1440: { maxWidth: 1440 },
  max1640: { maxWidth: 1640 },
  max1920: { maxWidth: 1920 },
} as const;

export const breakPoints = {
  sm: buildMediaQuery(SIZES.sm),
  md: buildMediaQuery(SIZES.md),
  lg: buildMediaQuery(SIZES.lg),
  max540: buildMediaQuery(SIZES.max540),
  min541: buildMediaQuery(SIZES.min541),
  max1024: buildMediaQuery(SIZES.max1024),
  max1440: buildMediaQuery(SIZES.max1440),
  max1640: buildMediaQuery(SIZES.max1640),
  max1920: buildMediaQuery(SIZES.max1920),
} as const;
