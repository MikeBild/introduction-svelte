<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Button } from "@introduction-svelte/svelte-components";
</script>

<Meta
  title="Atomics/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
  }}
/>

<Template let:args>
  <Button {...args} />
</Template>

<Story
  name="Primary"
  args={{
    label: "Button",
  }}
/>
