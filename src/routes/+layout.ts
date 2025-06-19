import { dev } from "$app/environment";
import { injectAnalytics } from "@vercel/analytics/sveltekit";
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();

injectAnalytics({ mode: dev ? "development" : "production" });

export const prerender = true;
