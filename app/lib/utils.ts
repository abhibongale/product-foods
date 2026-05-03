// Utility functions for the app

/**
 * Get the base path for the application
 * This is needed for GitHub Pages deployment where the site is served from a subdirectory
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

/**
 * Get a full path for an asset, including the base path
 * @param path - The path to the asset (e.g., '/chakli_clean.avif')
 * @returns The full path including base path
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
