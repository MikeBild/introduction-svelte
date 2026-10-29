---
title: "Markdown + SvelteKit extention"
description: "That's a short article to demonstrate Markdown + SvelteKit extention."
buttonLabel: "Click Me!"
author: "Mike Bild"
date: "2021-05-05"
published: true
---

<script>
  import { Button } from '@introduction-svelte/svelte-components';
function onButtonClick() {
    alert(description);
}
</script>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque orci nec facilisis iaculis. Sed accumsan placerat dolor. Donec sollicitudin nisi sit amet sodales molestie. Maecenas sit amet dolor nulla. Fusce sed elit et erat consequat dignissim. Nunc eu erat felis. Mauris pretium, arcu eu dapibus tempor, mauris eros tempor tortor, eu tincidunt erat libero sit amet mi. Phasellus eu libero mollis, finibus lacus eget, sollicitudin nulla.

Here's a random Svelte component thrown into my MDsveX markdown:

<Button label={buttonLabel} on:action={onButtonClick} />

### Heading

In lectus erat, maximus sed pulvinar eu, elementum vehicula mi. Maecenas nec dui urna. Nunc at magna purus. Cras facilisis, purus in dignissim egestas, ante ligula malesuada leo, quis malesuada dolor tortor vitae mauris. Morbi auctor mauris nibh, ut sodales tortor volutpat in. Donec aliquet ex eget ullamcorper semper. Proin vel libero at nulla gravida blandit. Maecenas odio massa, pretium blandit lectus ac, vehicula ultrices justo. Suspendisse libero dolor, tristique quis laoreet vel, placerat vel nisl. Nunc et venenatis nunc, vitae fringilla risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus consectetur pellentesque ipsum, in hendrerit lectus ultricies quis. Morbi ultrices, elit nec lacinia vulputate, dolor nibh commodo justo, quis dictum nisi nulla vel mi.