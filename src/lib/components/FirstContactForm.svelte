<script>
    import { Label, Input, Textarea, Select, Button, Modal, MultiSelect } from 'flowbite-svelte';
    import Popup from './popup.svelte';
    let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Notizen',
    rows: 4,
    placeholder: 'Notizen...'
  };
  let selectedGeschlecht = '';
  let Geschlecht = [
    //{ value: 'place', name: 'Bitte auswählen...', disabled: true, hidden: true }, // Placeholder-Objekt
    { value: 'm', name: 'Männlich' },
    { value: 'w', name: 'Weiblich' },
    { value: 'd', name: 'Divers' },
  ];
  let selectedAnrede = '';
  let Anrede = [
    //{ value: 'anrede', name: 'Bitte auswählen...', disabled: true, hidden: true }, // Placeholder-Objekt
    { value: 'herr', name: 'Herr' },
    { value: 'frau', name: 'Frau' },
  ];
  let selectedHaustier = [""];
  let Hasutiere = [
    { value: 'hnd', name: 'Hund' },
    { value: 'ktz', name: 'Katze' },
  ];
  let popupModal = false;
  function openPopup() {
    popupModal = true;
  }
  </script>
  
  <Label for="anrede-select" class="block mb-2">Anrede</Label>
  <Select id="anrede-select" class="mt-2" size="lg" items={Anrede} bind:value={selectedAnrede} />

  <div class="mb-6">
    <Label for="large-input" class="block mb-2">Vorname </Label>
    <Input id="large-input" size="lg" placeholder="Vorname" />
  </div>

  <div class="mb-6">
    <Label for="large-input" class="block mb-2">Nachname </Label>
    <Input id="large-input" size="lg" placeholder="Nachname" />
  </div>

  <Label for="geschlecht-select" class="block mb-2">Geschlecht</Label>
  <Select id="geschlecht-select" class="mt-2" size="lg" items={Geschlecht} bind:value={selectedGeschlecht} />

  <Label for="haustier-select" class="block mb-2">Haustiere</Label>
  <MultiSelect id="haustier-select" size="lg" items={Hasutiere} bind:value={selectedHaustier} />

  <div class="mb-6">
    <Label for="straße-select" class="block mb-2">Straße </Label>
    <Input id="straße-select" size="lg" placeholder="Straße" />
  </div>

  <div class="mb-6">
    <Label for="plz-select" class="block mb-2">PLZ </Label>
    <Input id="plz-select" size="lg" placeholder="PLZ" />
  </div>

  <div class="mb-6">
    <Label for="ort-select" class="block mb-2">Ort </Label>
    <Input id="ort-select" size="lg" placeholder="Ort" />
  </div>

  <Textarea {...textareaprops} />

  <Button on:click={openPopup}>Abbrechen</Button>

  <Button on:click={openPopup}>Bestätigen</Button>

 