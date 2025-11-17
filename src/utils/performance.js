// Web Vitals Performance Monitoring
// This utility tracks Core Web Vitals for performance monitoring

export function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // Use native Performance Observer API
        if ('PerformanceObserver' in window) {
            // Track Largest Contentful Paint (LCP)
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    onPerfEntry({
                        name: 'LCP',
                        value: lastEntry.renderTime || lastEntry.loadTime,
                        rating: lastEntry.renderTime < 2500 ? 'good' : lastEntry.renderTime < 4000 ? 'needs-improvement' : 'poor'
                    });
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.warn('LCP monitoring not supported');
            }

            // Track First Input Delay (FID)
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                        onPerfEntry({
                            name: 'FID',
                            value: entry.processingStart - entry.startTime,
                            rating: entry.processingStart - entry.startTime < 100 ? 'good' : entry.processingStart - entry.startTime < 300 ? 'needs-improvement' : 'poor'
                        });
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                console.warn('FID monitoring not supported');
            }

            // Track Cumulative Layout Shift (CLS)
            try {
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                            onPerfEntry({
                                name: 'CLS',
                                value: clsValue,
                                rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
                            });
                        }
                    }
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.warn('CLS monitoring not supported');
            }
        }

        // Track page load time
        if ('performance' in window && 'timing' in window.performance) {
            window.addEventListener('load', () => {
                const timing = window.performance.timing;
                const loadTime = timing.loadEventEnd - timing.navigationStart;
                onPerfEntry({
                    name: 'Page Load',
                    value: loadTime,
                    rating: loadTime < 3000 ? 'good' : loadTime < 5000 ? 'needs-improvement' : 'poor'
                });
            });
        }
    }
}

// Simple console logger for development
export function logWebVitals() {
    if (import.meta.env.DEV) {
        reportWebVitals((metric) => {
            console.log(`[Performance] ${metric.name}:`, {
                value: `${Math.round(metric.value)}ms`,
                rating: metric.rating
            });
        });
    }
}

// Export metrics to analytics (if configured)
export function sendToAnalytics(metric) {
    // Google Analytics 4
    if (window.gtag) {
        window.gtag('event', metric.name, {
            value: Math.round(metric.value),
            metric_rating: metric.rating,
            non_interaction: true
        });
    }

    // Plausible Analytics
    if (window.plausible) {
        window.plausible('Web Vitals', {
            props: {
                metric: metric.name,
                value: Math.round(metric.value),
                rating: metric.rating
            }
        });
    }
}
