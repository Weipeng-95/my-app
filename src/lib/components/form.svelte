<script>
    import { Label, Input, Textarea, Select } from 'flowbite-svelte';
    let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Notizen',
    rows: 4,
    placeholder: 'Notizen...'
  };
  let selected = '';
  let Geschlecht = [
    { value: 'm', name: 'Männlich' },
    { value: 'w', name: 'Weiblich' },
    { value: 'd', name: 'Divers' },
  ];
  </script>
  
  <div class="mb-6">
    <Label for="large-input" class="block mb-2">Name </Label>
    <Input id="large-input" size="lg" placeholder="Name" />
  </div>

  <div class="mb-6">
    <Label for="large-input" class="block mb-2">Adresse </Label>
    <Input id="large-input" size="lg" placeholder="Name" />
  </div>
  
    <Select class="mt-2" items={Geschlecht} bind:value={selected} />
  

  <Textarea {...textareaprops} />
