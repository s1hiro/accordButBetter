/**
 * Shared utility functions for the component library
 */

/**
 * Combines class names, filtering out falsy values.
 * Lightweight alternative to clsx package for simple use cases.
 *
 * @param classes - List of class names to combine
 * @returns Combined class string
 *
 * @example
 * ```ts
 * cn('btn', 'btn-primary', isActive && 'active', className)
 * ```
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

/**
 * Generate a random ID for accessibility attributes
 */
export function generateId(prefix = "component"): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Clamp a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Debounce a function call
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number,
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
