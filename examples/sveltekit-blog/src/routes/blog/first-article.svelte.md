---
title: Create a Blog with SvelteKit
---

<script context="module">
    export async function load({ fetch, url }) {        
        const currentPathParts = url.pathname.split('/');
        const currentPathSlug = currentPathParts[currentPathParts.length - 1];
        const response = await fetch(`/api/feedback/${currentPathSlug}`);
        const { count } = await response.json();
        
        return {
            status: 200,
            props: { count, currentPathSlug },
        };
    }
</script>

<script>
    import SEO from '$lib/components/SEO.svelte';
    import Feedback from '$lib/components/Feedback.svelte'; 
    import { invalidate } from '$app/navigation';

    export let count = 0;   
    export let currentPathSlug = '';     
    
    async function onFeedback() {
        await fetch(`/api/feedback/${currentPathSlug}`, { method: 'POST' });        
        await invalidate(`/api/feedback/${currentPathSlug}`);
    }
</script>

<SEO {title} />

# {title}

...ipsum larum ...

<Feedback {count} {onFeedback} />
